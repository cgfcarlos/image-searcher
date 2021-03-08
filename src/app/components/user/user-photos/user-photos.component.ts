import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, ObservableInput } from "rxjs";
import { distinctUntilChanged, map, switchMap, tap } from "rxjs/operators";
import { Photo } from "src/app/core/models/photo";
import { UserApiService } from "src/app/core/services/user-api.service";

@Component({
    selector: 'user-photos',
    templateUrl: './user-photos.component.html',
    styleUrls: ['./user-photos.component.scss']
})
export class UserPhotosComponent {

    photos: Photo[] = []

    pageNumber = 1;
    pageSize = 20;
    scrollCallback!: () => ObservableInput<any>;

    constructor(private activatedRoute: ActivatedRoute, private userApi: UserApiService) {
        this.activatedRoute.data.pipe(
            map((data) => {
                return data.photos;
            })
        ).subscribe(response => this.photos = response);
        this.scrollCallback = this.searchUserPhotos.bind(this);
    }

    private processData = (photos: Photo[]) => {
        this.pageNumber++;
        this.photos = !!photos ? this.photos.concat(photos) : [];
    }

    /**
     * Search user photos
     *
     * @return {*}  {Observable<Photo[]>} user photos
     * @memberof UserPhotosComponent
     */
    public searchUserPhotos(): Observable<Photo[]> {
        return this.activatedRoute.paramMap.pipe(switchMap(params => {
            return this.userApi.getUserPhotos(params.get('id'), { page: this.pageNumber, per_page: this.pageSize })
        }), tap(this.processData), distinctUntilChanged());
    }
}
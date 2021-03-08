import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, ObservableInput } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { Photo } from "src/app/core/models/photo";
import { UserApiService } from "src/app/core/services/user-api.service";

@Component({
    selector: 'user-likes',
    templateUrl: './user-likes.component.html',
    styleUrls: ['./user-likes.component.scss']
})
export class UserLikesComponent {
    photos: Photo[] = [];

    pageNumber = 1;
    pageSize = 20;
    scrollCallback!: () => ObservableInput<any>;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private userApi: UserApiService) {
        this.activatedRoute.data.pipe(
            map((data) => {
                return data.photos;
            })
        ).subscribe(response => this.photos = response);
        this.scrollCallback = this.searchUserLikedPhotos.bind(this);
    }


    private processData = (photos: Photo[]) => {
        this.pageNumber++;
        this.photos = !!photos ? this.photos.concat(photos) : [];
    }

    /**
     * Search user liked photos
     *
     * @return {*}  {Observable<Photo[]>} liked photos
     * @memberof UserLikesComponent
     */
    public searchUserLikedPhotos(): Observable<Photo[]> {
        return this.activatedRoute.paramMap.pipe(switchMap(params => {
            return this.userApi.getUserLikes(params.get('id'), { page: this.pageNumber, per_page: this.pageSize })
        }), tap(this.processData));
    }

    /**
     * Navigate to user profile
     * @param username username id
     */
     public goToUserProfile(username: string) {
        this.router.navigate(['/users', { id: username }]);
    }
}
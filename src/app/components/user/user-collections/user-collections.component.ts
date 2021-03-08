import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, ObservableInput } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { Collection } from "src/app/core/models/collection";
import { UserApiService } from "src/app/core/services/user-api.service";

@Component({
    selector: 'user-collections',
    templateUrl: './user-collections.component.html',
    styleUrls: ['./user-collections.component.scss']
})
export class UserCollectionsComponent {

    collections: Collection[] = [];

    pageNumber = 2;
    pageSize = 20;
    scrollCallback: () => ObservableInput<any>;

    constructor(private activatedRoute: ActivatedRoute, private userApi: UserApiService) {
        this.activatedRoute.data.pipe(
            map((data) => {
                return data.collections;
            })
        ).subscribe(response => this.collections = response);
        this.scrollCallback = this.searchUserCollections.bind(this);
    }

    private processData = (collections: Collection[]) => {
        this.pageNumber++;
        this.collections = !!collections ? this.collections.concat(collections) : [];
    }

    /**
     * Search user collections
     *
     * @return {*}  {Observable<Photo[]>} collections
     * @memberof UserLikesComponent
     */
    public searchUserCollections(): Observable<Collection[]> {
        return this.activatedRoute.paramMap.pipe(switchMap(params => {
            return this.userApi.getUserCollections(params.get('id'), { page: this.pageNumber, per_page: this.pageSize })
        }), tap(this.processData));
    }


}
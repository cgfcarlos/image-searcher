import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Collection } from "src/app/core/models/collection";

@Component({
    selector: 'user-collections',
    templateUrl: './user-collections.component.html',
    styleUrls: ['./user-collections.component.scss']
})
export class UserCollectionsComponent {

    collections$!: Observable<Collection[]>

    constructor(private activatedRoute: ActivatedRoute) {
        this.collections$ = this.activatedRoute.data.pipe(
            map((data) => {
                return data.collections;
            })
        );
    }
}
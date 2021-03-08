import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Photo } from "src/app/core/models/photo";

@Component({
    selector: 'user-likes',
    templateUrl: './user-likes.component.html',
    styleUrls: ['./user-likes.component.scss']
})
export class UserLikesComponent {
    photos$!: Observable<Photo[]>

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        this.photos$ = this.activatedRoute.data.pipe(
            map((data) => {
                return data.photos;
            })
        );
    }

    /**
     * Navigate to user profile
     * @param username username id
     */
     public goToUserProfile(username: string) {
        this.router.navigate(['/users', { id: username }]);
    }
}
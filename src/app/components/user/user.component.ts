import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../../core/models/user";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    user$!: Observable<User>;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.user$ = this.activatedRoute.data.pipe(
            map((data) => {
                return data.user;
            })
        );
    }


}
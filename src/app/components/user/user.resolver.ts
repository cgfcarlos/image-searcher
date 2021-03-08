import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../../core/models/user";
import { UserApiService } from "../../core/services/user-api.service";

@Injectable({
    providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

    constructor(private userApi: UserApiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
        return this.userApi.getUser(route.paramMap.get('id'));
    }

}
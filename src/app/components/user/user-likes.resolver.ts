import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Photo } from "src/app/core/models/photo";
import { UserApiService } from "src/app/core/services/user-api.service";

@Injectable({
    providedIn: 'root'
})
export class UserLikesResolver implements Resolve<Photo[]> {

    constructor(private userApi: UserApiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Photo[] | Observable<Photo[]> | Promise<Photo[]> {
        return this.userApi.getUserLikes(route.paramMap.get('id'));
    }

}
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Photo } from "src/app/core/models/photo";
import { UserApiService } from "src/app/core/services/user-api.service";

@Injectable({
    providedIn: 'root'
})
export class UserPhotosResolver implements Resolve<Photo[]> {

    constructor(private userApi: UserApiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Photo[] | Observable<Photo[]> | Promise<Photo[]> {
        return this.userApi.getUserPhotos(route.paramMap.get('id'));
    }

}
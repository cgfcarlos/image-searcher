import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Collection } from "src/app/core/models/collection";
import { UserApiService } from "src/app/core/services/user-api.service";

@Injectable({
    providedIn: 'root'
})
export class UserCollectionsResolver implements Resolve<Collection[]> {

    constructor(private userApi: UserApiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Collection[] | Observable<Collection[]> | Promise<Collection[]> {
        return this.userApi.getUserCollections(route.paramMap.get('id'));
    }

}
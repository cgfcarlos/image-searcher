import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Collection } from "../models/collection";
import { Page } from "../models/page";
import { Photo } from "../models/photo";
import { User } from "../models/user";

/**
 * Http service for user resources
 *
 * @export
 * @class UserApiService
 */
@Injectable({
    providedIn: 'root'
})
export class UserApiService {

    private readonly pathUser = '/users';
    private readonly pathPhotos = '/photos';
    private readonly pathLikes = '/likes';
    private readonly pathCollections = '/collections';

    constructor(private http: HttpClient) {}

    /**
     * Get user by id
     *
     * @param {(string | null)} id userId
     * @return {*}  {Observable<User>} user
     * @memberof UserApiService
     */
    public getUser(id: string | null): Observable<User> {
        return this.http.get<User>(`${environment.url_base}${this.pathUser}/${id}`);
    }

    /**
     * Get user photos
     *
     * @param {(string | null)} id userId
     * @param {Page} [page={ page: 0, per_page: 20 }] page
     * @return {*}  {Observable<Photo[]>} user photos
     * @memberof UserApiService
     */
    public getUserPhotos(id: string | null, page: Page = { page: 0, per_page: 20 }): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${environment.url_base}${this.pathUser}/${id}${this.pathPhotos}?page${page.page}&per_page${page.per_page}`);
    }

    /**
     * Get user liked photos
     *
     * @param {(string | null)} id userId
     * @param {Page} [page={ page: 0, per_page: 20 }] page
     * @return {*}  {Observable<Photo[]>} photos
     * @memberof UserApiService
     */
    public getUserLikes(id: string | null, page: Page = { page: 0, per_page: 20 }): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${environment.url_base}${this.pathUser}/${id}${this.pathLikes}?page${page.page}&per_page${page.per_page}`);
    }

    /**
     * Get user collections
     *
     * @param {(string | null)} id userId
     * @param {Page} [page={ page: 0, per_page: 20 }] page
     * @return {*}  {Observable<Collection[]>} collections
     * @memberof UserApiService
     */
    public getUserCollections(id: string | null, page: Page = { page: 0, per_page: 20 }): Observable<Collection[]> {
        return this.http.get<Collection[]>(`${environment.url_base}${this.pathUser}/${id}${this.pathCollections}?page${page.page}&per_page${page.per_page}`);
    }


}
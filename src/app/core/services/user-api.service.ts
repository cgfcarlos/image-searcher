import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Collection } from "../models/collection";
import { Page } from "../models/page";
import { Photo } from "../models/photo";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class UserApiService {

    private readonly pathUser = '/users';
    private readonly pathPhotos = '/photos';
    private readonly pathLikes = '/likes';
    private readonly pathCollections = '/collections';

    constructor(private http: HttpClient) {}

    public getUser(id: string | null): Observable<User> {
        return this.http.get<User>(`${environment.url_base}${this.pathUser}/${id}`);
    }

    public getUserPhotos(id: string | null, page: Page = { page: 0, per_page: 20 }): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${environment.url_base}${this.pathUser}/${id}${this.pathPhotos}?page${page.page}&per_page${page.per_page}`);
    }

    public getUserLikes(id: string | null, page: Page = { page: 0, per_page: 20 }): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${environment.url_base}${this.pathUser}/${id}${this.pathLikes}?page${page.page}&per_page${page.per_page}`);
    }

    public getUserCollections(id: string | null, page: Page = { page: 0, per_page: 20 }): Observable<Collection[]> {
        return this.http.get<Collection[]>(`${environment.url_base}${this.pathUser}/${id}${this.pathCollections}?page${page.page}&per_page${page.per_page}`);
    }


}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Page } from '../models/page';
import { Photo } from '../models/photo';
import { ResponseCollection } from '../models/response-collection';


@Injectable({
    providedIn: 'root'
})
export class ImageApiService {

    private readonly pathSearch = '/search';
    private readonly pathPhotos = '/photos';

    constructor(private http: HttpClient) {
    }

    public getPhotosBySearch(query: string, page: Page = { page: 0, per_page: 20 }): Observable<Photo[]> {
        return this.http.get<ResponseCollection<Photo>>(`${environment.url_base}${this.pathSearch}${this.pathPhotos}?query=${query}&page=${page.page}&per_page=${page.per_page}`)
            .pipe(map(response => response.results));
    }

    public getPhotos(page: Page = { page: 0, per_page: 20 }, order?: 'latest' | 'oldest' | 'popular') {
        let query = `?page=${page.page}&per_page=${page.per_page}`;
        if (order) {
            query = `&order_by=${order}`;
        }
        return this.http.get<Photo[]>(`${environment.url_base}${this.pathPhotos}${query}`);
    }

    public downloadPhoto(urlDownload: string) {
        return this.http.get<{ url: string }>(urlDownload).pipe(switchMap(response => {
            return this.http.get(response.url, { responseType: 'text' });
        }));
    }

}
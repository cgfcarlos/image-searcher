import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Page } from '../models/page';
import { Photo } from '../models/photo';
import { ResponseCollection } from '../models/response-collection';

/**
 * Http service for image resources
 *
 * @export
 * @class ImageApiService
 */
@Injectable({
    providedIn: 'root'
})
export class ImageApiService {

    private readonly pathSearch = '/search';
    private readonly pathPhotos = '/photos';

    constructor(private http: HttpClient) {
    }

    /**
     * Get a list of photos by query and page filter
     *
     * @param {string} query query
     * @param {Page} [page={ page: 1, per_page: 20 }] page
     * @return {*}  {Observable<Photo[]>} photos
     * @memberof ImageApiService
     */
    public getPhotosBySearch(query: string, page: Page = { page: 1, per_page: 20 }): Observable<Photo[]> {
        return this.http.get<ResponseCollection<Photo>>(`${environment.url_base}${this.pathSearch}${this.pathPhotos}?query=${query}&page=${page.page}&per_page=${page.per_page}`)
            .pipe(map(response => response.results));
    }

    /**
     * Get default photos by order and page
     *
     * @param {Page} [page={ page: 1, per_page: 20 }] page
     * @param {('latest' | 'oldest' | 'popular')} [order] order
     * @return {*}  {Observable<Photo[]>} photos
     * @memberof ImageApiService
     */
    public getPhotos(page: Page = { page: 1, per_page: 20 }, order?: 'latest' | 'oldest' | 'popular'): Observable<Photo[]> {
        let query = `?page=${page.page}&per_page=${page.per_page}`;
        if (order) {
            query = `&order_by=${order}`;
        }
        return this.http.get<Photo[]>(`${environment.url_base}${this.pathPhotos}${query}`);
    }

}
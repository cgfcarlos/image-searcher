import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ObservableInput } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Photo } from '../../core/models/photo';
import { ImageApiService } from '../../core/services/image-api.service';


/**
 * Component for the route /home
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

    cols = 3;

    photos: Photo[] = [];

    pageNumber = 0;
    pageSize = 20;
    scrollCallback!: () => ObservableInput<any>;
    query = '';


    constructor(private imageApi: ImageApiService, private breakpointObserver: BreakpointObserver, private router: Router) {
        breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe((result) => {
            if (result.matches) {
                this.cols = 1;
            }
        });
        breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large]).subscribe((result) => {
            if (result.matches) {
                this.cols = 3;
            }
        });
        this.scrollCallback = this.getPhotos.bind(this);
    }

    private processData = (photos: Photo[], reset = false) => {
        console.log(photos);
        this.pageNumber++;
        if (reset) {
            this.photos = [];
        }
        this.photos = !!photos ? this.photos.concat(photos) : [];
        console.log(this.photos);
    }

    /**
     * When cancelled return to original state
     *
     * @param {boolean} cancel
     * @memberof HomeComponent
     */
    public cancelSearch(cancel: boolean): void {
        if (cancel) {
            this.query = '';
            this.pageNumber = 0;
            this.getPhotos(this.query, true).subscribe();
        }
    }

    /**
     * Search photos by page
     * @param event 
     * @param offset 
     */
    public getPhotos(query?: string, reset = false): Observable<Photo[]> {
        if (query && query !== this.query) {
            this.pageNumber = 0;
            reset = true;
            this.query = query;
        }
        if (!!this.query) {
            return this.imageApi.getPhotosBySearch(this.query, { page: this.pageNumber, per_page: this.pageSize }).pipe(tap(data => this.processData(data, reset)));
        } else {
            return this.imageApi.getPhotos({ page: this.pageNumber, per_page: this.pageSize }).pipe(tap(data => this.processData(data, reset)));
        }
    }

    /**
     * Navigate to user profile
     * @param username username id
     */
    public goToUserProfile(username: string) {
        console.log(username);
        this.router.navigate(['/users', username, {id: username}]);
    }
}
import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Photo } from "../../../../core/models/photo";

/**
 * Photo detail component
 *
 * @export
 * @class PhotoDetailComponent
 * @implements {AfterViewInit}
 */
@Component({
    selector: 'photo-detail',
    templateUrl: './photo-detail.component.html',
    styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: { photo: Photo }) {
    }

}
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Photo } from "../../../core/models/photo";
import { PhotoDetailComponent } from "./photo-detail/photo-detail.component";

/**
 * Photo Component
 *
 * @export
 * @class PhotoComponent
 */
@Component({
    selector: 'photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
    @Input() photo!: Photo;
    @Output() onDownload: EventEmitter<string>;
    @Output() onProfileClicked: EventEmitter<string>;

    constructor(public dialog: MatDialog) {
        this.onDownload = new EventEmitter<string>();
        this.onProfileClicked = new EventEmitter<string>();
    }

    public openDetail(photo: Photo): void {
        this.dialog.open(PhotoDetailComponent, { data: { photo } });
    }

}
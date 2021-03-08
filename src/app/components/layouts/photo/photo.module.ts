import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../../shared/modules/material.module";
import { PhotoDetailComponent } from "./photo-detail/photo-detail.component";
import { PhotoComponent } from "./photo.component";

/**
 * Module definition of photo
 *
 * @export
 * @class PhotoModule
 */
@NgModule({
    imports:[
        CommonModule,
        MaterialModule
    ],
    declarations: [
        PhotoComponent,
        PhotoDetailComponent,
    ],
    exports: [
        PhotoComponent,
        PhotoDetailComponent,
    ]
})
export class PhotoModule {}
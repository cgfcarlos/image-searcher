import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../../shared/modules/material.module";
import { PhotoDetailComponent } from "./photo-detail/photo-detail.component";
import { PhotoComponent } from "./photo.component";

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
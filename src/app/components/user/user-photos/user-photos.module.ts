import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingModule } from "src/app/shared/components/loading/loading.module";
import { GestureModule } from "src/app/shared/directives/gestures/gestures.module";
import { PhotoModule } from "../../layouts/photo/photo.module";
import { UserPhotosComponent } from "./user-photos.component";

@NgModule({
    declarations: [
        UserPhotosComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        LoadingModule,
        GestureModule,
    ],
    exports: [
        UserPhotosComponent
    ]
})
export class UserPhotosModule {}
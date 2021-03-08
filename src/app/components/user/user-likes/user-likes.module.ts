import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingModule } from "src/app/shared/components/loading/loading.module";
import { GestureModule } from "src/app/shared/directives/gestures/gestures.module";
import { PhotoModule } from "../../layouts/photo/photo.module";
import { UserLikesComponent } from "./user-likes.component";

@NgModule({
    declarations: [
        UserLikesComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        GestureModule,
    ],
    exports: [
        UserLikesComponent
    ]
})
export class UserLikesModule {}
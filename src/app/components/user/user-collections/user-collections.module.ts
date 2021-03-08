import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingModule } from "src/app/shared/components/loading/loading.module";
import { GestureModule } from "src/app/shared/directives/gestures/gestures.module";
import { CollectionModule } from "../../layouts/collection/collection.module";
import { UserCollectionsComponent } from "./user-collections.component";

@NgModule({
    declarations: [
        UserCollectionsComponent,
    ],
    imports: [
        CommonModule,
        CollectionModule,
        GestureModule,
    ],
    exports: [
        UserCollectionsComponent
    ]
})
export class UserCollectionsModule {}
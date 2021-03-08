import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../../shared/modules/material.module";
import { CollectionComponent } from "./collection.component";

@NgModule({
    declarations: [
        CollectionComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        CollectionComponent
    ]
})
export class CollectionModule {}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../modules/material.module";
import { LoadingComponent } from "./loading.component";

/**
 * Module definition of loading
 *
 * @export
 * @class LoadingModule
 */
@NgModule({
    declarations: [
        LoadingComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        LoadingComponent,
    ]
})
export class LoadingModule { }
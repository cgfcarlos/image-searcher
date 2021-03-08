import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../../modules/material.module";
import { ToolbarComponent } from "./toolbar.component";

/**
 * Module definition of toolbar
 *
 * @export
 * @class ToolbarModule
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        ToolbarComponent,
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule {}
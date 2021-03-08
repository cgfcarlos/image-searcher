import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { ToastModule } from 'src/app/shared/components/toast';
import { ToolbarModule } from 'src/app/shared/components/toolbar/toolbar.module';
import { GestureModule } from 'src/app/shared/directives/gestures/gestures.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';

import { PhotoModule } from '../layouts/photo/photo.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        ToolbarModule,
        PhotoModule,
        LoadingModule,
        GestureModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [
        ToastModule
    ]
})
export class HomeModule { }
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { UserCollectionsModule } from './user-collections/user-collections.module';
import { UserLikesModule } from './user-likes/user-likes.module';
import { UserPhotosModule } from './user-photos/user-photos.module';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        UserPhotosModule,
        UserLikesModule,
        UserCollectionsModule,
        MaterialModule,
        LoadingModule
    ],
    exports: [
        UserComponent,
    ]
})
export class UserModule { }
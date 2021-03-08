import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserCollectionsResolver } from "./user-collections.resolver";
import { UserCollectionsComponent } from "./user-collections/user-collections.component";
import { UserLikesResolver } from "./user-likes.resolver";
import { UserLikesComponent } from "./user-likes/user-likes.component";
import { UserPhotosResolver } from "./user-photos.resolver";
import { UserPhotosComponent } from "./user-photos/user-photos.component";
import { UserComponent } from "./user.component";
import { UserResolver } from "./user.resolver";

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        resolve: {
            user: UserResolver
        },
        children: [
            { path: 'photos', component: UserPhotosComponent, resolve: { photos: UserPhotosResolver } },
            { path: 'liked', component: UserLikesComponent, resolve: { photos: UserLikesResolver } },
            { path: 'collections', component: UserCollectionsComponent, resolve: { collections: UserCollectionsResolver } }
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class UserRoutingModule { }
import { Component, Input } from "@angular/core";
import { Collection } from "../../../core/models/collection";

@Component({
    selector: 'collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {

    @Input() collection!: Collection;
}
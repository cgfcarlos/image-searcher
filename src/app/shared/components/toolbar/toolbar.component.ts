import { Component, EventEmitter, Output } from "@angular/core";

/**
 * Toolbar component with search field
 *
 * @export
 * @class ToolbarComponent
 */
@Component({
    selector: 'toolbar',
    styleUrls: ['./toolbar.component.scss'],
    templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {

    showSearch: boolean;
    searchText: string;
    @Output() searchEvent: EventEmitter<string>;
    @Output() cancelEvent: EventEmitter<boolean>;

    constructor() {
        this.showSearch = false;
        this.searchText = '';
        this.searchEvent = new EventEmitter<string>();
        this.cancelEvent = new EventEmitter<boolean>();
    }

    /**
     * Emits the event to send the search content
     *
     * @memberof ToolbarComponent
     */
    public search() : void {
        this.searchEvent.emit(this.searchText);
    }

    /**
     * Emits the event of the cancelled search
     *
     * @memberof ToolbarComponent
     */
    public cancelSearch() : void {
        this.showSearch = false;
        this.cancelEvent.emit(true);
    }

}
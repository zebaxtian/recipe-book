import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
    tabSelected: string = 'recipe';
    @Output() selectedTabEvent: EventEmitter<string>;

    constructor() {
        this.selectedTabEvent = new EventEmitter<string>();
    }

    ngOnInit() {
        this.selectedTabEvent.emit(this.tabSelected);
    }

    onSelectTab(tabName: string) {
        this.tabSelected = tabName;
        this.selectedTabEvent.emit(this.tabSelected);
    }
}
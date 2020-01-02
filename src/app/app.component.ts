import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  activeSection: string;

  constructor() {}
  
  onTabSelected(tabName: string) {
    this.activeSection = tabName;
  }
}

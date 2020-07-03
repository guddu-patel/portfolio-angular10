import { Component } from '@angular/core';
declare function initJQ(): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolioAngular9';
  ngAfterViewInit(): void {
    // called custome js function to initialize after component ready
    initJQ();
  }
}

import { Component } from '@angular/core';
import { Constants } from './models/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-life-cycle-hooks';
  constantsValues = new Constants();


}

import { Component, Input } from '@angular/core';
import { DataService } from './data.service';
import { Product } from './Models/Product'

interface AppState {
  info: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'kiosk';

  constructor() {

  }

  
}

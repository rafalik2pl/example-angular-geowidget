import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  token = 'YOUR_TOKEN';     // Generate YOUR_TOKEN on https://manager.paczkomaty.pl (for production environment) or https://sandbox-manager.paczkomaty.pl (for sandbox environment).
  identifier = 'Geo1';      // Html element identifier, default: 'Geo1'
  language = 'pl';          // Language, default: 'pl'
  config = 'parcelcollect'; // Config, default: 'parcelcollect'
  sandbox = false;          // Run as sandbox environment, default: false

  pointSelect(point: any) {
    console.log('Object of selected point: ', point);
  }

  apiReady(api: any) {
    // You can also use API Methods, as example
    api.changePosition({ longitude: 20.318968, latitude: 49.731131 }, 16);
  }

  constructor() { }

  ngOnInit(): void {
  }



}

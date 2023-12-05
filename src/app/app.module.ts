import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PageComponent } from './page/page.component';

import { InpostGeowidgetAngularModule } from 'inpost-geowidget-angular';
import { GeoComponent } from './geo/geo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PageComponent,
    GeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InpostGeowidgetAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

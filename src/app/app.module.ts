import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { MapModule } from './map/map.module';
import { SharedModule } from './shared/shared.module';
import { TouristProductsModule } from './tourist-products/tourist-products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MapModule,
    SharedModule,
    TouristProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './components/map/map.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LocationButtonComponent } from './components/location-button/location-button.component';

@NgModule({
  declarations: [
    MapPageComponent,
    MapComponent,
    LocationButtonComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    MatButtonModule,
    MatIconModule
  ], exports: [
    MapComponent,
    LocationButtonComponent
  ]
})
export class MapModule { }

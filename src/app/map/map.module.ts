import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './components/map/map.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LocationButtonComponent } from './components/location-button/location-button.component';
import { ClickMarkerComponent } from './components/click-marker/click-marker.component';
import { NeighborhoodsComponent } from './components/neighborhoods/neighborhoods.component';

@NgModule({
  declarations: [
    MapPageComponent,
    MapComponent,
    LocationButtonComponent,
    ClickMarkerComponent,
    NeighborhoodsComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    MatButtonModule,
    MatIconModule
  ], exports: [
    MapComponent,
    LocationButtonComponent,
    NeighborhoodsComponent,
    ClickMarkerComponent
  ]
})
export class MapModule { }

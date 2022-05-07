import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './components/map/map.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MapPageComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MapModule { }

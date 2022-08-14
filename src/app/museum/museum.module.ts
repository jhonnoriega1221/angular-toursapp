import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseumsPageComponent } from './pages/museums-page/museums-page.component';
import { MuseumRoutingModule } from './museum-routing.module'
import { SharedModule } from '../shared/shared.module';
import { MuseumListItemComponent } from './components/museum-list-item/museum-list-item.component';
import { MuseumListComponent } from './components/museum-list/museum-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MuseumDetailsPageComponent } from './pages/museum-details-page/museum-details-page.component';
import { MuseumHeaderDetailsComponent } from './components/museum-header-details/museum-header-details.component';
import { MuseumPictureComponent } from './components/museum-picture/museum-picture.component';
import { MuseumDetailsPricesComponent } from './components/museum-details-prices/museum-details-prices.component';
import { MuseumDetailsSchedulesComponent } from './components/museum-details-schedules/museum-details-schedules.component';
import { MapModule } from '../map/map.module';
import { MuseumDetailsMapComponent } from './components/museum-details-map/museum-details-map.component';

@NgModule({
  declarations: [
    MuseumsPageComponent,
    MuseumListItemComponent,
    MuseumListComponent,
    MuseumDetailsPageComponent,
    MuseumHeaderDetailsComponent,
    MuseumPictureComponent,
    MuseumDetailsPricesComponent,
    MuseumDetailsSchedulesComponent,
    MuseumDetailsMapComponent
  ],
  imports: [
    CommonModule,
    MuseumRoutingModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    MatRippleModule,
    MatButtonModule,
    MapModule
  ]
})
export class MuseumModule { }

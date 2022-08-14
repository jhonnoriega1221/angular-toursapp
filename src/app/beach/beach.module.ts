import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeachesPageComponent } from './pages/beaches-page/beaches-page.component';
import { BeachRoutingModule } from './beach-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BeachDetailsPageComponent } from './pages/beach-details-page/beach-details-page.component';
import { BeachListComponent } from './components/beach-list/beach-list.component';
import { BeachListItemComponent } from './components/beach-list-item/beach-list-item.component';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { BeachTopDetailsComponent } from './components/beach-top-details/beach-top-details.component';
import { BeachImageDetailsComponent } from './components/beach-image-details/beach-image-details.component';
import { BeachScheduleDetailsComponent } from './components/beach-schedule-details/beach-schedule-details.component';
import { BeachServicesDetailsComponent } from './components/beach-services-details/beach-services-details.component';
import { BeachLocationDetailsComponent } from './components/beach-location-details/beach-location-details.component';
import { MapModule } from '../map/map.module';



@NgModule({
  declarations: [
    BeachesPageComponent,
    BeachDetailsPageComponent,
    BeachListComponent,
    BeachListItemComponent,
    BeachTopDetailsComponent,
    BeachImageDetailsComponent,
    BeachScheduleDetailsComponent,
    BeachServicesDetailsComponent,
    BeachLocationDetailsComponent
  ],
  imports: [
    CommonModule,
    BeachRoutingModule,
    SharedModule,
    MatRippleModule,
    MatIconModule,
    MapModule
  ]
})
export class BeachModule { }

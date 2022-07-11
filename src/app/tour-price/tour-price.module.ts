import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursPageComponent } from './pages/tours-page/tours-page.component';
import { TourPriceRoutingModule } from './tour-price-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TourListComponent } from './components/tour-list/tour-list.component';
import { TourListItemComponent } from './components/tour-list-item/tour-list-item.component';
import { MatRippleModule } from '@angular/material/core';
import { TourDetailsPageComponent } from './pages/tour-details-page/tour-details-page.component';


@NgModule({
  declarations: [
    ToursPageComponent,
    TourListComponent,
    TourListItemComponent,
    TourDetailsPageComponent
  ],
  imports: [
    CommonModule,
    TourPriceRoutingModule,
    SharedModule,
    MatRippleModule
  ]
})
export class TourPriceModule { }

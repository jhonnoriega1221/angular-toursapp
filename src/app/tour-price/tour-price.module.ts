import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursPageComponent } from './pages/tours-page/tours-page.component';
import { TourPriceRoutingModule } from './tour-price-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ToursPageComponent
  ],
  imports: [
    CommonModule,
    TourPriceRoutingModule,
    SharedModule
  ]
})
export class TourPriceModule { }

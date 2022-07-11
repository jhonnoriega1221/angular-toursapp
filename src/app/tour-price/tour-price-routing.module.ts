import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToursPageComponent } from './pages/tours-page/tours-page.component';
import { TourDetailsPageComponent } from './pages/tour-details-page/tour-details-page.component';

const routes: Routes = [
    { path: '', component: ToursPageComponent },
    { path: ':id', component: TourDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourPriceRoutingModule { }
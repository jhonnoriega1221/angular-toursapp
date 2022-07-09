import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToursPageComponent } from './pages/tours-page/tours-page.component';

const routes: Routes = [
    { path: '', component: ToursPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourPriceRoutingModule { }
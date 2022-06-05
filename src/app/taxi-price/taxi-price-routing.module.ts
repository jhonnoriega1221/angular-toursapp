import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxiPricePageComponent } from "./pages/taxi-price-page/taxi-price-page.component";


const routes: Routes = [
    { path: '', component: TaxiPricePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxiPriceRoutingModule { }
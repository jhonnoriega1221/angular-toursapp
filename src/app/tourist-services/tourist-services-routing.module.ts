import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesCategoriesPageComponent } from "./pages/services-categories-page/services-categories-page.component";

const routes: Routes = [
    { path: '', component: ServicesCategoriesPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouristServicesRoutingModule { }
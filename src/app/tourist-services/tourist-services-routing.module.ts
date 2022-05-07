import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesCategoriesPageComponent } from "./pages/services-categories-page/services-categories-page.component";
import { TransportServicePageComponent } from "./pages/transport-service-page/transport-service-page.component";


const routes: Routes = [
    { path: '', component: ServicesCategoriesPageComponent},
    { path: 'transport', component: TransportServicePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouristServicesRoutingModule { }
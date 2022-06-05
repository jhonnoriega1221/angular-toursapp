import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ServicesCategoriesPageComponent } from "./pages/services-categories-page/services-categories-page.component";

const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'services', component: ServicesCategoriesPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
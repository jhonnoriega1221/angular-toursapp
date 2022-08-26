import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsPageComponent } from "./pages/foods-page/foods-page.component";
import { FoodDetailsPageComponent } from './pages/food-details-page/food-details-page.component';


const routes: Routes = [
    { path: '', component: FoodsPageComponent},
    { path: ':id', component: FoodDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
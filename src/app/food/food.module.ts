import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListItemComponent } from './components/food-list-item/food-list-item.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodsPageComponent } from './pages/foods-page/foods-page.component';
import { FoodRoutingModule } from './food-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatRippleModule } from '@angular/material/core';
import { FoodDetailsPageComponent } from './pages/food-details-page/food-details-page.component';
import { FoodTopDetailsComponent } from './components/food-top-details/food-top-details.component';
import { FoodDetailsPricesComponent } from './components/food-details-prices/food-details-prices.component';
import { FoodDetailsPictureComponent } from './components/food-details-picture/food-details-picture.component';

@NgModule({
  declarations: [
    FoodListItemComponent,
    FoodListComponent,
    FoodsPageComponent,
    FoodDetailsPageComponent,
    FoodTopDetailsComponent,
    FoodDetailsPricesComponent,
    FoodDetailsPictureComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    SharedModule,
    MatRippleModule
  ]
})
export class FoodModule { }

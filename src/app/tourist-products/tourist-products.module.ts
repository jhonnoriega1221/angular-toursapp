import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TouristProductsRoutingModule } from './tourist-products-routing.module';
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsListPageComponent,
    ProductDetailsPageComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    TouristProductsRoutingModule,
    SharedModule
  ]
})
export class TouristProductsModule { }

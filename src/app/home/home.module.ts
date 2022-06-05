import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesCategoriesPageComponent } from './pages/services-categories-page/services-categories-page.component';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeTipsComponent } from './components/home-tips/home-tips.component';
import { ServiceCategoryButtonComponent } from './components/service-category-button/service-category-button.component';
import { ServiceCategoriesListComponent } from './components/service-categories-list/service-categories-list.component';

import { HomePriceListsButtonsComponent } from './components/home-price-lists-buttons/home-price-lists-buttons.component';
import { HomePriceListsButtonComponent } from './components/home-price-lists-button/home-price-lists-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CurrencyExchangeModule } from '../currency-exchange/currency-exchange.module';
import { HomeCardBodyComponent } from './components/home-card-body/home-card-body.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [    
    ServicesCategoriesPageComponent,
    ServiceCategoryButtonComponent,
    ServiceCategoriesListComponent,
    HomePageComponent,
    HomeTipsComponent,
    HomePriceListsButtonsComponent,
    HomePriceListsButtonComponent,
    HomeCardBodyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatCardModule,
    CurrencyExchangeModule,
    SharedModule
  ]
})
export class HomeModule { }

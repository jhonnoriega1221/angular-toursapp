import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeTipsComponent } from './components/home-tips/home-tips.component';
import { HomePriceListsButtonsComponent } from './components/home-price-lists-buttons/home-price-lists-buttons.component';
import { HomePriceListsButtonComponent } from './components/home-price-lists-button/home-price-lists-button.component';
import { HomeExchangeRateComponent } from './components/home-exchange-rate/home-exchange-rate.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HomePageComponent,
    HomeTipsComponent,
    HomePriceListsButtonsComponent,
    HomePriceListsButtonComponent,
    HomeExchangeRateComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule
  ]
})
export class HomeModule { }

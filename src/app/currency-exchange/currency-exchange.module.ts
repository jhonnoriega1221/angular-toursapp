import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCurrencyExchangeComponent } from './components/home-currency-exchange/home-currency-exchange.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    HomeCurrencyExchangeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    HomeCurrencyExchangeComponent
  ]
})
export class CurrencyExchangeModule { }

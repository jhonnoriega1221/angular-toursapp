import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCurrencyExchangeComponent } from './components/home-currency-exchange/home-currency-exchange.component';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeCurrencyExchangeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    SharedModule
  ],
  exports: [
    HomeCurrencyExchangeComponent
  ]
})
export class CurrencyExchangeModule { }

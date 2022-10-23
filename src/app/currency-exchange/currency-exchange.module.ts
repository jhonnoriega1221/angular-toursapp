import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCurrencyExchangeComponent } from './components/home-currency-exchange/home-currency-exchange.component';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeCurrencyExchangeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    FormsModule,
    SharedModule,
    MatInputModule
  ],
  exports: [
    HomeCurrencyExchangeComponent
  ]
})
export class CurrencyExchangeModule { }

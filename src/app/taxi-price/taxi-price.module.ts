import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MapModule } from '../map/map.module';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { TaxiPriceRoutingModule } from './taxi-price-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaxiPricePageComponent } from './pages/taxi-price-page/taxi-price-page.component';
import { TaxiPriceCalculatorComponent } from './components/taxi-price-calculator/taxi-price-calculator.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TaxiPriceCalculatorInputComponent } from './components/taxi-price-calculator-input/taxi-price-calculator-input.component';

@NgModule({
  declarations: [

    TaxiPricePageComponent,
    TaxiPriceCalculatorComponent,
    TaxiPriceCalculatorInputComponent
  ],
  imports: [
    CommonModule,
    TaxiPriceRoutingModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MapModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    FormsModule
  ]
})
export class TaxiPriceModule { }

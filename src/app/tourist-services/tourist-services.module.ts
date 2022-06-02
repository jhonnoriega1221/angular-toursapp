import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesCategoriesPageComponent } from './pages/services-categories-page/services-categories-page.component';
import { SharedModule } from '../shared/shared.module';
import { MapModule } from '../map/map.module';
import { FormsModule } from '@angular/forms';


import { TouristServicesRoutingModule } from './tourist-services-routing.module';
import { ServiceCategoryButtonComponent } from './components/service-category-button/service-category-button.component';
import { ServiceCategoriesListComponent } from './components/service-categories-list/service-categories-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TransportServicePageComponent } from './pages/transport-service-page/transport-service-page.component';
import { TaxiPriceCalculatorComponent } from './components/taxi-price-calculator/taxi-price-calculator.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TaxiPriceCalculatorInputComponent } from './components/taxi-price-calculator-input/taxi-price-calculator-input.component';

@NgModule({
  declarations: [
    ServicesCategoriesPageComponent,
    ServiceCategoryButtonComponent,
    ServiceCategoriesListComponent,
    TransportServicePageComponent,
    TaxiPriceCalculatorComponent,
    TaxiPriceCalculatorInputComponent
  ],
  imports: [
    CommonModule,
    TouristServicesRoutingModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MapModule,
    MatAutocompleteModule,
    FormsModule
  ]
})
export class TouristServicesModule { }

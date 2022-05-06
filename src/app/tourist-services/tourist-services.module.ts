import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesCategoriesPageComponent } from './pages/services-categories-page/services-categories-page.component';
import { SharedModule } from '../shared/shared.module';

import { TouristServicesRoutingModule } from './tourist-services-routing.module';
import { ServiceCategoryButtonComponent } from './components/service-category-button/service-category-button.component';
import { ServiceCategoriesListComponent } from './components/service-categories-list/service-categories-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ServicesCategoriesPageComponent,
    ServiceCategoryButtonComponent,
    ServiceCategoriesListComponent
  ],
  imports: [
    CommonModule,
    TouristServicesRoutingModule,
    SharedModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TouristServicesModule { }

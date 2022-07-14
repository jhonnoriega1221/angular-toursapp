import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeachesPageComponent } from './pages/beaches-page/beaches-page.component';
import { BeachRoutingModule } from './beach-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BeachDetailsPageComponent } from './pages/beach-details-page/beach-details-page.component';
import { BeachListComponent } from './components/beach-list/beach-list.component';
import { BeachListItemComponent } from './components/beach-list-item/beach-list-item.component';
import { MatRippleModule } from '@angular/material/core';
import { BeachTopDetailsComponent } from './components/beach-top-details/beach-top-details.component';



@NgModule({
  declarations: [
    BeachesPageComponent,
    BeachDetailsPageComponent,
    BeachListComponent,
    BeachListItemComponent,
    BeachTopDetailsComponent
  ],
  imports: [
    CommonModule,
    BeachRoutingModule,
    SharedModule,
    MatRippleModule
  ]
})
export class BeachModule { }

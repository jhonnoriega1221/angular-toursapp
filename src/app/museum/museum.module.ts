import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseumsPageComponent } from './pages/museums-page/museums-page.component';
import { MuseumRoutingModule } from './museum-routing.module'
import { SharedModule } from '../shared/shared.module';
import { MuseumListItemComponent } from './components/museum-list-item/museum-list-item.component';
import { MuseumListComponent } from './components/museum-list/museum-list.component';
import { ToggleFilterButtonComponent } from './components/toggle-filter-button/toggle-filter-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { FilterButtonsGroupComponent } from './components/filter-buttons-group/filter-buttons-group.component';
import { MatButtonModule } from '@angular/material/button';
import { MuseumDetailsPageComponent } from './pages/museum-details-page/museum-details-page.component';

@NgModule({
  declarations: [
    MuseumsPageComponent,
    MuseumListItemComponent,
    MuseumListComponent,
    ToggleFilterButtonComponent,
    FilterButtonsGroupComponent,
    MuseumDetailsPageComponent
  ],
  imports: [
    CommonModule,
    MuseumRoutingModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    MatRippleModule,
    MatButtonModule
  ]
})
export class MuseumModule { }

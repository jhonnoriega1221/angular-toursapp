import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseumsPageComponent } from './pages/museums-page/museums-page.component';
import { MuseumRoutingModule } from './museum-routing.module'
import { SharedModule } from '../shared/shared.module';
import { MuseumListItemComponent } from './components/museum-list-item/museum-list-item.component';
import { MuseumListComponent } from './components/museum-list/museum-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MuseumDetailsPageComponent } from './pages/museum-details-page/museum-details-page.component';
import { MuseumHeaderDetailsComponent } from './components/museum-header-details/museum-header-details.component';
import { MuseumPictureComponent } from './components/museum-picture/museum-picture.component';
import { MuseumInfoLineComponent } from './components/museum-info-line/museum-info-line.component';
import { MatDividerModule } from '@angular/material/divider';
import { MuseumExhibitionsLineComponent } from './components/museum-exhibitions-line/museum-exhibitions-line.component';
import { MuseumExhibitionsPageComponent } from './pages/museum-exhibitions-page/museum-exhibitions-page.component';
import { MuseumExhibitionsListComponent } from './components/museum-exhibitions-list/museum-exhibitions-list.component';

@NgModule({
  declarations: [
    MuseumsPageComponent,
    MuseumListItemComponent,
    MuseumListComponent,
    MuseumDetailsPageComponent,
    MuseumHeaderDetailsComponent,
    MuseumPictureComponent,
    MuseumInfoLineComponent,
    MuseumExhibitionsLineComponent,
    MuseumExhibitionsPageComponent,
    MuseumExhibitionsListComponent
  ],
  imports: [
    CommonModule,
    MuseumRoutingModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    MatRippleModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class MuseumModule { }

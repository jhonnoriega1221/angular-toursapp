import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { AppNavbarButtonComponent } from './components/app-navbar-button/app-navbar-button.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AppToolbarSearchBarComponent } from './components/app-toolbar-search-bar/app-toolbar-search-bar.component';



@NgModule({
  declarations: [
    AppToolbarComponent,
    AppNavbarComponent,
    AppNavbarButtonComponent,
    AppLayoutComponent,
    AppToolbarSearchBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatRippleModule
  ]
})
export class SharedModule { }

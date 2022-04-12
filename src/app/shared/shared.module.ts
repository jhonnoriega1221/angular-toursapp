import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { AppNavbarButtonComponent } from './components/app-navbar-button/app-navbar-button.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

import { MatIconModule } from '@angular/material/icon'



@NgModule({
  declarations: [
    AppToolbarComponent,
    AppNavbarComponent,
    AppNavbarButtonComponent,
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class SharedModule { }

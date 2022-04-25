import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Componentes
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { AppToolbarSearchBarComponent } from './components/app-toolbar-search-bar/app-toolbar-search-bar.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { AppNavbarButtonComponent } from './components/app-navbar-button/app-navbar-button.component';
import { BackTitleButtonComponent } from './components/back-title-button/back-title-button.component';

//Layouts
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

//Modulos de Material Angular
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
    declarations: [
        AppToolbarComponent,
        AppToolbarSearchBarComponent,
        AppNavbarComponent,
        AppNavbarButtonComponent,
        BackTitleButtonComponent,
        AppLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatRippleModule
    ],
    exports: [
        BackTitleButtonComponent
    ]
})
export class SharedModule {}

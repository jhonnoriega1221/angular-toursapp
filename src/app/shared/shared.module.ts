import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Componentes
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { AppToolbarMenuButtonComponent } from './components/app-toolbar-menu-button/app-toolbar-menu-button.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { AppNavbarButtonComponent } from './components/app-navbar-button/app-navbar-button.component';
import { BackTitleButtonComponent } from './components/back-title-button/back-title-button.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

//Layouts
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

//Modulos de Material Angular
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';

//Directivas
import { SkeletonLoaderDirective } from './directives/skeleton-loader.directive';
import { AppToolbarProgressBarComponent } from './components/app-toolbar-progress-bar/app-toolbar-progress-bar.component';

import { CoreModule } from '../core/core.module';



@NgModule({
    declarations: [
        AppToolbarComponent,
        AppToolbarMenuButtonComponent,
        AppNavbarComponent,
        AppNavbarButtonComponent,
        BackTitleButtonComponent,
        ErrorMessageComponent,
        AppLayoutComponent,
        SkeletonLoaderComponent,
        SkeletonLoaderDirective,
        AppToolbarProgressBarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatRippleModule,
        MatProgressBarModule,
        MatMenuModule,
        CoreModule
    ],
    exports: [
        BackTitleButtonComponent,
        SkeletonLoaderComponent,
        SkeletonLoaderDirective,
        ErrorMessageComponent
    ]
})
export class SharedModule {}

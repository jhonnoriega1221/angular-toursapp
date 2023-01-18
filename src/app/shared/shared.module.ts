import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { AppToolbarMenuButtonComponent } from './components/app-toolbar-menu-button/app-toolbar-menu-button.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { AppNavbarButtonComponent } from './components/app-navbar-button/app-navbar-button.component';
import { BackTitleButtonComponent } from './components/back-title-button/back-title-button.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

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
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

//Directivas
import { SkeletonLoaderDirective } from './directives/skeleton-loader.directive';
import { AppToolbarProgressBarComponent } from './components/app-toolbar-progress-bar/app-toolbar-progress-bar.component';
import { FilterButtonsGroupComponent } from './components/filter-buttons-group/filter-buttons-group.component';
import { ToggleFilterButtonComponent } from './components/toggle-filter-button/toggle-filter-button.component';
import { DetailsSeparatorComponent } from './components/details-separator/details-separator.component';
import { DetailsPriceTextComponent } from './components/details-price-text/details-price-text.component';
import { SetPriceDialogComponent } from './components/set-price-dialog/set-price-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SetPriceButtonComponent } from './components/set-price-button/set-price-button.component';


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
        FilterButtonsGroupComponent,
        ToggleFilterButtonComponent,
        DetailsSeparatorComponent,
        DetailsPriceTextComponent,
        StarRatingComponent,
        SetPriceDialogComponent,
        ConfirmDialogComponent,
        SetPriceButtonComponent,
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
        TranslateModule,
        MatDialogModule,
        MatRadioModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    exports: [
        BackTitleButtonComponent,
        SkeletonLoaderComponent,
        SkeletonLoaderDirective,
        ErrorMessageComponent,
        TranslateModule,
        FilterButtonsGroupComponent,
        DetailsSeparatorComponent,
        DetailsPriceTextComponent,
        AppToolbarMenuButtonComponent,
        StarRatingComponent,
        SetPriceDialogComponent,
        SetPriceButtonComponent
        
    ]
})
export class SharedModule {}

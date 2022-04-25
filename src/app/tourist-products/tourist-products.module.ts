import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TouristProductsRoutingModule } from './tourist-products-routing.module';
import { SharedModule } from '../shared/shared.module';

//Páginas
import { ProductsListPageComponent } from './pages/products-list-page/products-list-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';

//Componentes
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductAltPricesButtonComponent } from './components/product-alt-prices-button/product-alt-prices-button.component';
import { ProductAltPricesListComponent } from './components/product-alt-prices-list/product-alt-prices-list.component';
import { ProductPriceDialogComponent } from './components/product-price-dialog/product-price-dialog.component';

//Modulos de Material Angular
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        ProductsListPageComponent,
        ProductDetailsPageComponent,
        ProductsListComponent,
        ProductInfoComponent,
        ProductAltPricesButtonComponent,
        ProductAltPricesListComponent,
        ProductPriceDialogComponent,
        ProductListItemComponent,
    ],
    imports: [
        CommonModule,
        TouristProductsRoutingModule,
        SharedModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class TouristProductsModule { }

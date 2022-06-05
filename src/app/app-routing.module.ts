import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from "./shared/layouts/app-layout/app-layout.component";

const routes: Routes = [
    { path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import ('./home/home.module').then( m => m.HomeModule)},
            { path: 'map', loadChildren: () => import ('./map/map.module').then( m => m.MapModule)},
            { path: 'products', loadChildren: () => import ('./tourist-products/tourist-products.module').then( m => m.TouristProductsModule)},
            { path: 'services/taxi-prices', loadChildren: () => import ('./taxi-price/taxi-price.module').then( m => m.TaxiPriceModule)}
        ]
    }, {
        path: 'settings', loadChildren: () => import ('./settings/settings.module').then(  m => m.SettingsModule )
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
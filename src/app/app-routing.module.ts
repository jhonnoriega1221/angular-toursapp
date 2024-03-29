import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from "./shared/layouts/app-layout/app-layout.component";
import { FirstTimeGuard } from './onboarding/guards/first-time.guard';

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
            { path: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule) },
            { path: 'products', loadChildren: () => import('./tourist-products/tourist-products.module').then(m => m.TouristProductsModule) },
            { path: 'services/taxi-prices', loadChildren: () => import('./taxi-price/taxi-price.module').then(m => m.TaxiPriceModule) },
            { path: 'services/museum', loadChildren: () => import('./museum/museum.module').then(m => m.MuseumModule) },
            { path: 'services/tour-prices', loadChildren: () => import('./tour-price/tour-price.module').then(m => m.TourPriceModule) },
            { path: 'services/food', loadChildren: () => import('./food/food.module').then(m => m.FoodModule) },
            { path: 'services/beach', loadChildren: () => import('./beach/beach.module').then(m => m.BeachModule) }
        ],
        canActivateChild: [FirstTimeGuard]
    }, {
        path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
        canActivateChild: [FirstTimeGuard]
    }, { 
        path: 'onboarding', loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingModule)
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
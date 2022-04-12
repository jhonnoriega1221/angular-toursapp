import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from "./shared/layouts/app-layout/app-layout.component";

const routes: Routes = [
    { path: '', component: AppLayoutComponent,
        children: [
            { path: '', loadChildren: () => import ('./home/home.module').then( m => m.HomeModule)},
            { path: 'map', loadChildren: () => import ('./map/map.module').then( m => m.MapModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeachesPageComponent } from './pages/beaches-page/beaches-page.component';
import { BeachDetailsPageComponent } from './pages/beach-details-page/beach-details-page.component';

const routes: Routes = [
    { path: '', component: BeachesPageComponent},
    { path: ':id', component: BeachDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeachRoutingModule { }
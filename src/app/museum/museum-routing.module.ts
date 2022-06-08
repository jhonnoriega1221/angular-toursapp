import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MuseumsPageComponent } from './pages/museums-page/museums-page.component';
import { MuseumDetailsPageComponent } from './pages/museum-details-page/museum-details-page.component';
import { MuseumExhibitionsPageComponent } from './pages/museum-exhibitions-page/museum-exhibitions-page.component';


const routes: Routes = [
    { path: '', component: MuseumsPageComponent},
    { path: ':id', component: MuseumDetailsPageComponent},
    { path: ':id/exhibitions', component: MuseumExhibitionsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuseumRoutingModule { }
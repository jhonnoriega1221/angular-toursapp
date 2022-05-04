import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { LanguageSettingsListComponent } from './components/language-settings-list/language-settings-list.component'; 
import { AboutComponent } from './components/about/about.component';
import { SettingsLayoutComponent } from './layouts/settings-layout/settings-layout.component';

const routes: Routes = [
    { path: '', component: SettingsLayoutComponent, children: [
      { path: 'language', component: LanguageSettingsListComponent},
      { path: 'about', component: AboutComponent}

    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
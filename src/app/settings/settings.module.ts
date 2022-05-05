import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SettingsListComponent } from './components/settings-list/settings-list.component';

import { SharedModule } from '../shared/shared.module';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LanguageSettingsListComponent } from './components/language-settings-list/language-settings-list.component';
import { AboutComponent } from './components/about/about.component';
import { SettingsLayoutComponent } from './layouts/settings-layout/settings-layout.component';
import { SettingsToolbarComponent } from './components/settings-toolbar/settings-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    SettingsPageComponent,
    SettingsListComponent,
    LanguageSettingsListComponent,
    AboutComponent,
    SettingsLayoutComponent,
    SettingsToolbarComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    CoreModule
  ]
})
export class SettingsModule { }

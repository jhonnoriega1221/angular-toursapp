import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWeatherComponent } from './components/home-weather/home-weather.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    HomeWeatherComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    HomeWeatherComponent
  ]
})
export class WeatherModule { }

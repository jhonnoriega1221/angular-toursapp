import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWeatherComponent } from './components/home-weather/home-weather.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HomeWeatherComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    HomeWeatherComponent
  ]
})
export class WeatherModule { }

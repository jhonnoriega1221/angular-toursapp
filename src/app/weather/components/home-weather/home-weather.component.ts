import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';


@Component({
  selector: 'app-home-weather',
  templateUrl: './home-weather.component.html',
  styleUrls: ['./home-weather.component.scss'],
  animations: [
    trigger('showUpdateDate', [
      state('visible', style({
        'opacity': 1,
      })),
      transition('invisible => visible', animate(800))
    ])
  ]
})
export class HomeWeatherComponent implements OnInit {

  public updateDateState: string = 'invisible';


  constructor() { }

  ngOnInit(): void {
    this.updateDateState = 'visible';

  }

}

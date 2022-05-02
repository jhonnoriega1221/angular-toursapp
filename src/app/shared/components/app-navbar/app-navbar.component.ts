import { Component, OnInit } from '@angular/core';

export interface navigationButton {
    icon:string;
    text:string;
    route:string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})

export class AppNavbarComponent implements OnInit {

  public navigationButtons:navigationButton[] = [
      {icon: 'home', text: 'Inicio', route: '/'},
      {icon: 'map', text: 'Mapa', route: '/map'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

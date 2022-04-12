import { Component, OnInit } from '@angular/core';

export interface navigationButtonType {
    icon:string;
    text:string;
}

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})

export class AppNavbarComponent implements OnInit {

  public navigationButtons:navigationButtonType[] = [
      {icon: 'home', text: 'Inicio'},
      {icon: 'map', text: 'Mapa'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

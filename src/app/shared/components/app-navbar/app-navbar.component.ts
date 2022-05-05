import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor( public translate:TranslateService) {
    translate.get("NAVBAR")
    .subscribe ({
      next: (v) => { 
        this.navigationButtons[0].text = v.HOME;
        this.navigationButtons[1].text = v.MAP;
      },
      error: (e) => { console.log(e)},
      complete: () => {}
    })
  }

  ngOnInit(): void {
  }

}

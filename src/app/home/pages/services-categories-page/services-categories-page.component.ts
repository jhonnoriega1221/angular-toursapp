import { Component, OnInit } from '@angular/core';

interface categoryButton {
  text:string;
  background:string;
  icon: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-services-categories-page',
  templateUrl: './services-categories-page.component.html',
  styleUrls: ['./services-categories-page.component.scss']
})
export class ServicesCategoriesPageComponent implements OnInit {

  public categoriesListButtons:categoryButton[] = [
    { text: 'Transporte', background: '../../../../assets/transport_button_bg.jpg', icon: 'local_taxi', route: '/services/transport', color:'#c49000' },
    /*{ text: 'Playas', background: '../../../../assets/beach_button_bg.jpg', icon: 'beach_access', route: '/services/transport', color:'#0077c2' },
    { text: 'Restaurantes', background: '../../../../assets/restaurant_button_bg.jpg', icon: 'restaurant', route: '/services/transport', color:'#8c7b75' },
    { text: 'Paseos', background: '../../../../assets/tour_button_bg.jpg', icon: 'tour', route: '/services/transport', color:'#004c40' },
    { text: 'Museos', background: '../../../../assets/museum_button_bg.jpg', icon: 'museum', route: '/services/museum', color:'#6a0080' }
  */];

  constructor() { }

  ngOnInit(): void {
  }

}

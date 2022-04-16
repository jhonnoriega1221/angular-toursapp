import { Component, OnInit } from '@angular/core';

export interface homeButton {
  color: string;
  text: string;
  route: string;
}

@Component({
  selector: 'app-home-price-lists-buttons',
  templateUrl: './home-price-lists-buttons.component.html',
  styleUrls: ['./home-price-lists-buttons.component.scss']
})
export class HomePriceListsButtonsComponent implements OnInit {

  public priceListButtons: homeButton[] = [
    { color: 'primary', text: 'Productos', route: '/products' },
    { color: 'accent', text: 'Servicios', route: '/services' }
  ];

  constructor() {}

  ngOnInit(): void {}

}

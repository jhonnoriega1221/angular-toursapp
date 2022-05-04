import { Component, OnInit } from '@angular/core';

export interface homeButton {
  color: string;
  text: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-home-price-lists-buttons',
  templateUrl: './home-price-lists-buttons.component.html',
  styleUrls: ['./home-price-lists-buttons.component.scss']
})
export class HomePriceListsButtonsComponent implements OnInit {

  public priceListButtons: homeButton[] = [
    { color: 'accent', text: 'Productos', icon: 'ballot', route: '/products' },
    { color: 'primary', text: 'Servicios', icon: 'tour', route: '/services' }
  ];

  constructor() {}

  ngOnInit(): void {}

}

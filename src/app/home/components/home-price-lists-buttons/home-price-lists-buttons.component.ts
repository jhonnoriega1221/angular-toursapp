import { Component, OnInit, Input } from '@angular/core';

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

  @Input() priceListButtons:homeButton[] = [];

  constructor( ) {
  }

  ngOnInit(): void {}

}

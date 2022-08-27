import { Component, OnInit, Input } from '@angular/core';
import { Price } from '../../models/food';

@Component({
  selector: 'app-food-details-prices',
  templateUrl: './food-details-prices.component.html',
  styleUrls: ['./food-details-prices.component.scss']
})
export class FoodDetailsPricesComponent implements OnInit {
  @Input() prices:Price[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

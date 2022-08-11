import { Component, OnInit, Input } from '@angular/core';
import { Price } from '../../models/museum';


@Component({
  selector: 'app-museum-details-prices',
  templateUrl: './museum-details-prices.component.html',
  styleUrls: ['./museum-details-prices.component.scss']
})
export class MuseumDetailsPricesComponent implements OnInit {

  @Input() prices:Price[] = [];
  @Input() title:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tour-details-price',
  templateUrl: './tour-details-price.component.html',
  styleUrls: ['./tour-details-price.component.scss']
})
export class TourDetailsPriceComponent implements OnInit {

  @Input() price:string = '0';

  constructor() { }

  ngOnInit(): void {
  }

}

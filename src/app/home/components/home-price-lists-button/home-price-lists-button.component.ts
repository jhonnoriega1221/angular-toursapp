import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-price-lists-button',
  templateUrl: './home-price-lists-button.component.html',
  styleUrls: ['./home-price-lists-button.component.scss']
})
export class HomePriceListsButtonComponent implements OnInit {

  @Input() color = '';
  @Input() text = '';
  @Input() route = '';

  constructor() { }

  ngOnInit(): void {
  }

}

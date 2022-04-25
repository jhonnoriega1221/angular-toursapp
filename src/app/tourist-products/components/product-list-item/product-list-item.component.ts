import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

  @Input() itemUrl = ['',0];
  @Input() urlImage = '';
  @Input() rowOneText = '';
  @Input() rowTwoText = 0;
  @Input() rowThreeText = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

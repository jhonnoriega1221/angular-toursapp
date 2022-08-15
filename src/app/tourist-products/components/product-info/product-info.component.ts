import { Component, OnInit, Input } from '@angular/core';
import { Price } from '../../models/product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  @Input() name:string = '';
  @Input() prices:Price[] = [];

  constructor( ) { }

  ngOnInit(): void {
  }

}

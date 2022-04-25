import { Component, OnInit, Input } from '@angular/core';
import { FakeProduct } from '../../models/fake-product';


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  @Input() fakeProduct:FakeProduct = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  };

  constructor( ) { }

  ngOnInit(): void {
  }

}

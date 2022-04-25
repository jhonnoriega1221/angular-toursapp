import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '../../services/fake-store.service';
import { FakeProduct } from '../../models/fake-product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  public fakeProduct:FakeProduct = {
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

  constructor( private fakeStoreService: FakeStoreService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      const id = params['id'];
      this.fakeStoreService.getProduct(id).subscribe( product => {
        this.fakeProduct = product;
      })
    })
  }



}

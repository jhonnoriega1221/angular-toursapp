import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '../../services/fake-store.service';
import { FakeProduct } from '../../models/fake-product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

    private productId:number = 0;
    public isLoading:boolean = true;
    public isError:boolean = false;

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

  constructor( private fakeStoreService: FakeStoreService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.productId = params['id'];
      this.getProductInfo();
    })
  }

  public getProductInfo(): void {
      this.isError = false;
      this.fakeStoreService.getProduct(this.productId)
      .subscribe(
        {
          next: (v) => this.fakeProduct = v,
          error: (e) => { 
            this.isError = true; 
            console.error(e)
          },
          complete: () => this.isLoading = false
        }
      );
  }

}

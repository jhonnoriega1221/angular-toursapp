import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { TouristProductService } from '../../services/tourist-product.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

    private productId:string = '';
    public isLoading:boolean = true;
    public isError:boolean = false;
    public pageTitle:string = '';

  public product:Product = {
    _id: '',
    name: '',
    imageURL: '',
    prices: []
  }

  constructor( private touristProductService: TouristProductService, private activatedRoute: ActivatedRoute, private translate:TranslateService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.productId = params['id'];
      this.getProductInfo();
    })
    this.translatePage();
  }

  public getProductInfo(): void {
      this.isError = false;
      this.touristProductService.getProduct(this.productId)
      .subscribe(
        {
          next: (v) => this.product = v,
          error: (e) => { 
            this.isError = true; 
            console.error(e)
          },
          complete: () => this.isLoading = false
        }
      );
  }

      private translatePage():void {
      this.translate.get("TOURIST_PRODUCTS.DETAILS")
      .subscribe( {
        next: (v) => {
            this.pageTitle = v.TITLE;
        }
      })
    }

}

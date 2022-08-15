import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { TouristProductService } from '../../services/tourist-product.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss']
})
export class ProductsListPageComponent implements OnInit {

  public pageTitle:string = '';

  public touristProducts:Product[] = [];
  public isLoading:boolean = true;
  public isLoadingMore:boolean = false;
  public isError:boolean = false;

    constructor(public touristProductService:TouristProductService, private translate:TranslateService) { }

    ngOnInit(): void {
        this.getProducts();
        this.translatePage();
    }

    public getProducts(): void {
      this.isError = false;
      this.touristProductService.getProducts()
      .subscribe(
        {
          next: (v) => this.touristProducts = v,
          error: (e) => { 
            this.isError = true; 
            console.error(e)
          },
          complete: () => this.isLoading = false
        }
      );
    }

    private translatePage():void{
      this.translate.get("TOURIST_PRODUCTS.LIST")
      .subscribe({
        next: (v) => { this.pageTitle = v.TITLE }
      })
    }
}

import { Component, OnInit } from '@angular/core';
import { FakeProduct } from '../../models/fake-product';
import { FakeStoreService } from '../../services/fake-store.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss']
})
export class ProductsListPageComponent implements OnInit {

  public pageTitle:string = '';

  public fakeProducts:FakeProduct[] = [];
  public isLoading:boolean = true;
  public isLoadingMore:boolean = false;
  public isError:boolean = false;

    constructor(public fakeStoreService:FakeStoreService, private translate:TranslateService) { }

    ngOnInit(): void {
        this.getFakeProducts(10);
        this.translatePage();
    }

    public getFakeProducts(limit:Number): void {
      this.isError = false;
      this.fakeStoreService.getProducts(limit)
      .subscribe(
        {
          next: (v) => this.fakeProducts = v,
          error: (e) => { 
            this.isError = true; 
            console.error(e)
          },
          complete: () => this.isLoading = false
        }
      );
    }

    public loadMoreFakeProducts() {
      this.isLoadingMore = true;
      this.fakeStoreService.getProducts(this.fakeProducts.length + 5)
      .subscribe(
        {
          next: (v) => this.fakeProducts = v,
          error: (e) => { 
            console.error(e)
          },
          complete: () => this.isLoadingMore = false
        }
      )
    }

    private translatePage():void{
      this.translate.get("TOURIST_PRODUCTS.LIST")
      .subscribe({
        next: (v) => { this.pageTitle = v.TITLE }
      })
    }
}

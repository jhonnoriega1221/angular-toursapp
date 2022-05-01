import { Component, OnInit } from '@angular/core';
import { FakeProduct } from '../../models/fake-product';
import { FakeStoreService } from '../../services/fake-store.service';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss']
})
export class ProductsListPageComponent implements OnInit {

  public fakeProducts:FakeProduct[] = [];
  public isLoading:boolean = true;
  public isError:boolean = false;

    constructor(public fakeStoreService:FakeStoreService) { }

    ngOnInit(): void {
        this.getFakeProducts(10);
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
}

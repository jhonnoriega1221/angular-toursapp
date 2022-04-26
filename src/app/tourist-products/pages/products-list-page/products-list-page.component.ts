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
  public isLoading:boolean = false;

    constructor(public fakeStoreService:FakeStoreService) { }

    ngOnInit(): void {
        this.getFakeProducts(10);
    }

    private getFakeProducts(limit:Number): void {
      this.isLoading = true;
        this.fakeStoreService.getProducts(limit).subscribe(products => {
          this.isLoading = false;
            this.fakeProducts = products;
        });
    }
}

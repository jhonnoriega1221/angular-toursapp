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

    private getFakeProducts(limit:Number): void {
        this.fakeStoreService.getProducts(limit).subscribe(products => {
            this.fakeProducts = products;
        });
    }

    constructor(public fakeStoreService:FakeStoreService) { }

    ngOnInit(): void {
        this.getFakeProducts(15);
    }

}

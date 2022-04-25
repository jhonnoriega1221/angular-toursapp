import { Component, OnInit, Input } from '@angular/core';
import { FakeProduct } from '../../models/fake-product';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

    @Input() fakeProducts:FakeProduct[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '../../services/fake-store.service';
import { FakeProduct } from '../../models/fake-product';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

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

/*export interface productItem {
    productUrlImage:string;
    productName:string;
    productPrice:string;
    productAltPrice:string;
    productId:string;
    productRoute:string;
}*/

/*private getRoutes(): void {
        this.productsList.forEach( (product) => {
            product.productRoute = product.productId;
        })
    }*/

    /*public productsList:productItem[] = [
        {productUrlImage: 'https://picsum.photos/200', productId: '1', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: ''},
        {productUrlImage: 'https://picsum.photos/200', productId: '2', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: ''},
        {productUrlImage: 'https://picsum.photos/200', productId: '3', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: ''},
        {productUrlImage: 'https://picsum.photos/200', productId: '4', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: ''},
        {productUrlImage: 'https://picsum.photos/200', productId: '5', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: ''},
        {productUrlImage: 'https://picsum.photos/200', productId: '6', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: ''},
        {productUrlImage: 'https://picsum.photos/200', productId: '7', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: ''}
    ];*/
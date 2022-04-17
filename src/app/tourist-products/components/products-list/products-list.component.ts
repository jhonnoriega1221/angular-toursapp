import { Component, OnInit } from '@angular/core';

export interface productItem {
    productUrlImage:string;
    productName:string;
    productPrice:string;
    productAltPrice:string;
    productId:string;
    productRoute:string;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public productsList:productItem[] = [
      {productUrlImage: 'https://picsum.photos/200', productId: '1', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: 'products/agua'},
      {productUrlImage: 'https://picsum.photos/200', productId: '1', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: 'products/agua'},
      {productUrlImage: 'https://picsum.photos/200', productId: '1', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: 'products/agua'},
      {productUrlImage: 'https://picsum.photos/200', productId: '1', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: 'products/agua'},
      {productUrlImage: 'https://picsum.photos/200', productId: '1', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: 'products/agua'},
      {productUrlImage: 'https://picsum.photos/200', productId: '1', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: 'products/agua'},
      {productUrlImage: 'https://picsum.photos/200', productId: '1', productName: 'Agua', productPrice: '$12.000', productAltPrice: '$13.000', productRoute: 'products/agua'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}

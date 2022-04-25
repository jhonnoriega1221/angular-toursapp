import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FakeProduct } from '../models/fake-product';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {

  constructor(private http:HttpClient) { }
  url:String = 'https://fakestoreapi.com/';

  getProducts(limit:Number):Observable<FakeProduct[]> {
    return this.http.get<FakeProduct[]>(`${this.url}products?limit=${limit}`);
  };

  getProduct(id:Number):Observable<FakeProduct> {
    return this.http.get<FakeProduct>(`${this.url}products/${id}`);
  };
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TouristProductService {

  constructor(private http: HttpClient) {}
  apiURL: String = environment.apiURL;

  getProducts(): Observable < Product[] > {
    return this.http.get<Product[]>(`${this.apiURL}tourist-products`);
  };

  getProduct(productId: string): Observable < Product > {
    return this.http.get<Product>(`${this.apiURL}tourist-products/${productId}`);
  }
}

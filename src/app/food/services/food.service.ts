import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor( private http:HttpClient) { }
  apiURL: string = environment.apiURL;

  getFoods(): Observable < Food[] > {
    return this.http.get<Food[]>(`${this.apiURL}foods`);
  };

  getFood(foodId: string): Observable < Food > {
    return this.http.get<Food>(`${this.apiURL}foods/${foodId}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tours } from 'src/app/tour-price/models/tours';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor(private http: HttpClient) {}
  apiURL: String = environment.apiURL;

  getTours(): Observable < Tours[] > {
    return this.http.get<Tours[]>(`${this.apiURL}tours`);
  };

  getTour(tourId: number): Observable < Tours > {
    return this.http.get<Tours>(`${this.apiURL}tours/${tourId}`);
  }
}

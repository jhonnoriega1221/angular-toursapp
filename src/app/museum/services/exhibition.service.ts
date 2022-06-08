import { Injectable } from '@angular/core';
import { Exhibition } from '../models/exhibition';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  url: String = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getExhibitions(): Observable < Exhibition[] > {
    return this.http.get<Exhibition[]>(`${this.url}exhibitions`);
  };

  getMuseumExhibitions(museumId:number): Observable < Exhibition[] > {
    return this.http.get<Exhibition[]>(`${this.url}exhibitions?museum_id=${museumId}`);
  };
}

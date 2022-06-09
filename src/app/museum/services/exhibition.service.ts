import { Injectable } from '@angular/core';
import { Exhibition } from '../models/exhibition';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  apiURL: String = environment.apiURL;

  constructor(private http: HttpClient) {}

  getExhibitions(): Observable < Exhibition[] > {
    return this.http.get<Exhibition[]>(`${this.apiURL}exhibitions`);
  };

  getMuseumExhibitions(museumId:number): Observable < Exhibition[] > {
    return this.http.get<Exhibition[]>(`${this.apiURL}exhibitions?museum_id=${museumId}`);
  };
}

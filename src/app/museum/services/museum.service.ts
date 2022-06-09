import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Museum } from '../models/museum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  constructor(private http: HttpClient) {}
  apiURL: String = environment.apiURL;

  getMuseums(): Observable < Museum[] > {
    return this.http.get<Museum[]>(`${this.apiURL}museum`);
  };

  getMuseum(museumId: number): Observable < Museum > {
    return this.http.get<Museum>(`${this.apiURL}museum/${museumId}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Museum } from '../models/museum';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  constructor(private http: HttpClient) {}
  url: String = 'http://localhost:3000/';

  getMuseums(): Observable < Museum[] > {
    return this.http.get<Museum[]>(`${this.url}museum`);
  };

  getMuseum(museumId: number): Observable < Museum > {
    return this.http.get<Museum>(`${this.url}museum/${museumId}`);
  }
}

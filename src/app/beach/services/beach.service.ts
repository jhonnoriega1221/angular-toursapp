import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beach } from '../models/beach';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeachService {

  
  apiURL: String = environment.apiURL;

  constructor(private http: HttpClient) {}

  getBeaches(): Observable < Beach[] > {
    return this.http.get<Beach[]>(`${this.apiURL}beaches`);
  };

  getBeach(beachId:string): Observable < Beach > {
    return this.http.get<Beach>(`${this.apiURL}beaches/${beachId}`);
  };
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocationPlace } from '../models/place';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  nominatimURL:String = environment.nominatimURL;
  constructor( private http:HttpClient ) { }

  public search(query:string|undefined):Observable <LocationPlace[]>{
    return this.http.get<LocationPlace[]>(`${this.nominatimURL}search.php?format=jsonv2&q=${query}`);
  }

}

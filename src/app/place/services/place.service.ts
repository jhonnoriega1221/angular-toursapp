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
    const viewBox:number[] = [-75.57, 10.33,-75.44,10.46]
    return this.http.get<LocationPlace[]>(`${this.nominatimURL}search.php?format=jsonv2&bounded=1&viewbox=${viewBox[0]},${viewBox[1]},${viewBox[2]},${viewBox[3]}&q=${query}`);
  }

}

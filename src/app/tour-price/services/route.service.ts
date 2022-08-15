import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as geojson from 'geojson';


@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) {}
  apiURL: String = environment.apiURL;

  getRoutes(): Observable < geojson.FeatureCollection[] > {
    return this.http.get<geojson.FeatureCollection[]>(`${this.apiURL}routes`);
  };

  getRoute(routeId: string): Observable < geojson.FeatureCollection > {
    return this.http.get<geojson.FeatureCollection>(`${this.apiURL}routes/${routeId}`);
  }
}

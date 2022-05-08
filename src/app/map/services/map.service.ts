import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map!: L.Map;

  constructor() { }

  public getMapInstance(): L.Map {
    return this.map;
  }

  public setMapInstance(map:L.Map): void {
    this.map = map;
  }
}
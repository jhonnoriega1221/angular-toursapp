import { Component, Input, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from 'src/app/map/services/map.service';

@Component({
  selector: 'app-museum-details-map',
  templateUrl: './museum-details-map.component.html',
  styleUrls: ['./museum-details-map.component.scss']
})
export class MuseumDetailsMapComponent implements AfterViewInit {

  @Input() lat:number = 0;
  @Input() lon:number = 0;

  constructor( private mapService:MapService) { }

  ngAfterViewInit(): void {
    this.setMapLocation(this.lat, this.lon);
  }
  
  private setMapLocation(lat:number, lon:number){
    this.mapService.getMapInstance().setView(L.latLng(lat,lon), 18)
  }

}

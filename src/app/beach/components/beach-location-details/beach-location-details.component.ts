import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from 'src/app/map/services/map.service';

@Component({
  selector: 'app-beach-location-details',
  templateUrl: './beach-location-details.component.html',
  styleUrls: ['./beach-location-details.component.scss']
})
export class BeachLocationDetailsComponent implements AfterViewInit {

  @Input() lat:number = 0;
  @Input() lon:number = 0;

  constructor( private mapService:MapService ) { }

  ngAfterViewInit(): void {
    this.setMapLocation(this.lat, this.lon);
  }
  
  private setMapLocation(lat:number, lon:number){
    this.mapService.getMapInstance().setView(L.latLng(lat,lon), 16)
  }

}

import { Component, Input, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import * as geojson from 'geojson';
import { MapService } from 'src/app/map/services/map.service';

@Component({
  selector: 'app-tour-details-route',
  templateUrl: './tour-details-route.component.html',
  styleUrls: ['./tour-details-route.component.scss']
})
export class TourDetailsRouteComponent implements AfterViewInit {

  @Input() lat:number = 0;
  @Input() lon:number = 0;
  @Input() route?:geojson.FeatureCollection;

  private routeLayer = L.geoJSON(this.route);


  constructor( private mapService:MapService ) { }

  ngAfterViewInit(): void {
    this.getRouteLine();
  }

  private getRouteLine(){
    L.geoJSON(this.route).addTo(this.mapService.getMapInstance());
    const xd = L.geoJSON(this.route).getBounds();
    this.mapService.getMapInstance().fitBounds(xd)
    console.log(xd);
  }

  private setMapLocation(){
    this.mapService.getMapInstance().setView(L.latLng(10.4311363, -75.5440975), 14)
  }

}

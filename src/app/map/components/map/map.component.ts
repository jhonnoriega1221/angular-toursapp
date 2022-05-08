import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnDestroy {

  constructor(private mapService: MapService) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    this.mapService.getMapInstance().stopLocate();
    this.mapService.getMapInstance().off();
    L.DomUtil.get('map')!.remove();
  }

  private initMap(): void {
    this.mapService.setMapInstance(
      L.map('map', {
        center: [10.416066331203975, -75.5189895629883],
        zoom: 13,
        zoomControl: false,
      }));

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.mapService.getMapInstance());
  }
}

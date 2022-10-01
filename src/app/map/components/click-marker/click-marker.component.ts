import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { MapService } from '../../services/map.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-click-marker',
  template: ``,
  styleUrls: ['./click-marker.component.scss']
})
export class ClickMarkerComponent implements AfterViewInit, OnDestroy {

  @Input() latlon = { lat : '0', lon : '0' };

  private clickMarker = L.marker({ lat: 0, lng: 0 });
  

  constructor( private mapService:MapService) { }

   ngAfterViewInit(): void {
       this.initClickMarker();
   }

   ngOnDestroy(): void {
    this.mapService.getMapInstance().removeLayer(this.clickMarker);
    this.mapService.getMapInstance().off();
   }

   private initClickMarker(){
    const latLng = L.latLng(Number.parseFloat(this.latlon.lat), Number.parseFloat(this.latlon.lon));
    console.log(latLng);
    this.clickMarker.setLatLng(latLng).addTo(this.mapService.getMapInstance());
    this.mapService.getMapInstance().on('click', (e:L.LeafletMouseEvent) => {
        this.clickMarker.setLatLng(e.latlng).addTo(this.mapService.getMapInstance());
      });
   }


}

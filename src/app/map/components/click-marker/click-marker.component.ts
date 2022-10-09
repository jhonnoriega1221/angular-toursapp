import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { MapService } from '../../services/map.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-click-marker',
  template: ``,
  styleUrls: ['./click-marker.component.scss']
})
export class ClickMarkerComponent implements AfterViewInit, OnDestroy {

  @Input() latLon = { lat : '0', lon : '0' };

  private clickMarkerIcon = L.icon({
    iconUrl: '../../../../assets/click_marker.png',
    iconSize: [42, 42],
    iconAnchor: [21, 42]
  })

  private clickMarker = L.marker({ lat: 0, lng: 0 }, { icon: this.clickMarkerIcon, interactive: false });
  

  constructor( private mapService:MapService) { }

   ngAfterViewInit(): void {
       this.initClickMarker();
   }

   ngOnDestroy(): void {
    this.mapService.getMapInstance().removeLayer(this.clickMarker);
    this.mapService.getMapInstance().off();
   }

   private initClickMarker(){
    const latLng = L.latLng(Number.parseFloat(this.latLon.lat), Number.parseFloat(this.latLon.lon));

    if(!(this.latLon.lon === '0' && this.latLon.lat === '0'))
      this.clickMarker.setLatLng(latLng).addTo(this.mapService.getMapInstance());
      
    this.mapService.getMapInstance().on('click', (e:L.LeafletMouseEvent) => {
          this.clickMarker.setLatLng(e.latlng).addTo(this.mapService.getMapInstance());
      });
   }


}

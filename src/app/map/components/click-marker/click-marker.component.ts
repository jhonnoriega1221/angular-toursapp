import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { MapService } from '../../services/map.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-click-marker',
  template: ``,
  styleUrls: ['./click-marker.component.scss']
})
export class ClickMarkerComponent implements AfterViewInit, OnDestroy {



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
    this.mapService.getMapInstance().on('click', (e:L.LeafletMouseEvent) => {
        this.clickMarker.setLatLng(e.latlng).addTo(this.mapService.getMapInstance());
      });
   }


}

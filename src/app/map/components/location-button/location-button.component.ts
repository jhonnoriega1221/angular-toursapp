import { Component, AfterViewInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import * as L from 'leaflet';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-location-button',
  templateUrl: './location-button.component.html',
  styleUrls: ['./location-button.component.scss']
})
export class LocationButtonComponent implements AfterViewInit {

  private isMarkerSet: boolean = false;
  private locationMarker = L.marker({ lat: 0, lng: 0 });
  private locateError: boolean = false;

  public locationIcon: string = 'location_searching';
  private locationIconAnimationInterval: number = 0;

  constructor( private mapService:MapService, private matSnackBar:MatSnackBar) { }

  ngAfterViewInit(): void {
    this.initLocate();
  }

  private initLocate() {
      this.locateError = false;
      this.locationIconAnimation();
      
      console.log('localizar')
      this.mapService.getMapInstance().locate({
          watch: true
        }).on('locationfound', (e:L.LocationEvent) => {
          clearInterval(this.locationIconAnimationInterval)
          this.locationIcon = 'my_location'
          if (!this.isMarkerSet) {
            this.locationMarker.setLatLng(e.latlng).addTo(this.mapService.getMapInstance());
            this.isMarkerSet = true;
          } else {
            this.locationMarker.setLatLng(e.latlng);
          }
        })
        .on('locationerror', (e:L.ErrorEvent) => {
          clearInterval(this.locationIconAnimationInterval);
          this.matSnackBar.open('No se pudo encontrar su ubicación','',{
            verticalPosition: 'bottom',
            horizontalPosition: 'start',
            duration: 2000,
            panelClass: 'app-snack-bar'
          })
          this.locationIcon = "location_disabled";
          this.locateError = true;
          this.mapService.getMapInstance().stopLocate();
        });
    }

        public focusLocation() {
      if(this.locateError) {
        this.initLocate();
      } else if(!this.isMarkerSet){
        console.log('obteniendo ubicación...')
      } 
      else {
        this.mapService.getMapInstance().flyTo(this.locationMarker.getLatLng())  
      }
    }

        private locationIconAnimation() {
      this.locationIconAnimationInterval = setInterval( () => {
        if(this.locationIcon !== "location_searching")
          this.locationIcon = "location_searching";
        else
          this.locationIcon = "my_location";
      }, 300 )
    }

}

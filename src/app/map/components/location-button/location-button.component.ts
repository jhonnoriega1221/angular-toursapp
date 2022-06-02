import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { MapService } from '../../services/map.service';
import * as L from 'leaflet';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-location-button',
  templateUrl: './location-button.component.html',
  styleUrls: ['./location-button.component.scss']
})
export class LocationButtonComponent implements AfterViewInit, OnDestroy {

  private locationMarkerIcon = L.icon({
    iconUrl: '../../../../assets/location_marker.png',
    iconSize: [18, 18],
    iconAnchor: [0, 25] // size of the icon
  });

  private isMarkerSet: boolean = false;
  private locationMarker = L.marker({ lat: 0, lng: 0 }, { icon: this.locationMarkerIcon });
  private locateError: boolean = false;

  public locationButtonIcon: string = 'location_searching';
  private locationButtonIconAnimationInterval: number = 0;

  constructor(private mapService: MapService, private matSnackBar: MatSnackBar) {}

  ngAfterViewInit(): void {
    this.initLocate();
  }

  ngOnDestroy(): void {
    clearInterval(this.locationButtonIconAnimationInterval);
    this.mapService.getMapInstance().stopLocate();
  }

  private initLocate() {
    this.locateError = false;
    this.locationButtonIconAnimation();
    this.mapService.getMapInstance().locate({
        watch: true
      }).on('locationfound', (e: L.LocationEvent) => {
        clearInterval(this.locationButtonIconAnimationInterval)
        this.locationButtonIcon = 'my_location'
        if (!this.isMarkerSet) {
          this.locationMarker.setLatLng(e.latlng).addTo(this.mapService.getMapInstance());
          this.isMarkerSet = true;
        } else {
          this.locationMarker.setLatLng(e.latlng);
        }
      })
      .on('locationerror', (e: L.ErrorEvent) => {
        console.error(e);
        clearInterval(this.locationButtonIconAnimationInterval);
        this.matSnackBar.open('No se pudo encontrar su ubicación', '', {
          verticalPosition: 'bottom',
          horizontalPosition: 'start',
          duration: 2000,
          panelClass: 'app-snack-bar'
        })
        this.locationButtonIcon = "location_disabled";
        this.locateError = true;
        this.mapService.getMapInstance().stopLocate();
      });
  }

  public focusLocation() {
    if (this.locateError) {
      this.initLocate();
    } else if (!this.isMarkerSet) {
      console.log('obteniendo ubicación...')
    } else {
      this.mapService.getMapInstance().flyTo(this.locationMarker.getLatLng())
    }
  }

  private locationButtonIconAnimation() {
    this.locationButtonIconAnimationInterval = setInterval(() => {
      if (this.locationButtonIcon !== "location_searching")
        this.locationButtonIcon = "location_searching";
      else
        this.locationButtonIcon = "my_location";
    }, 300)
  }
}

import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnDestroy{
  private map!: L.Map;

  private isMarkerSet: boolean = false;
  private locationMarker = L.marker({ lat: 0, lng: 0 });
  private locateError:boolean = false;

  public locationIcon:string = 'location_searching';
  private locationIconAnimationInterval:number = 0;

  private initMap(): void {
    this.map = L.map('map', {
      center: [10.416066331203975, -75.5189895629883],
      zoom: 13,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  constructor( private matSnackBar:MatSnackBar) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.initLocate();
  }

  ngOnDestroy(): void {
    clearInterval(this.locationIconAnimationInterval);
    this.map.stopLocate();
    this.map.off();
    L.DomUtil.get('map')!.remove();
  }

  private initLocate() {
    this.locateError = false;
    this.locationIconAnimation();
    this.map.locate({
        watch: true
      }).on('locationfound', (e:L.LocationEvent) => {
        clearInterval(this.locationIconAnimationInterval)
        this.locationIcon = 'my_location'
        if (!this.isMarkerSet) {
          this.locationMarker.setLatLng(e.latlng).addTo(this.map);
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
        this.map.stopLocate();
      });
  }

  public focusLocation() {
    if(this.locateError) {
      this.initLocate();
    } else if(!this.isMarkerSet){
      console.log('obteniendo ubicación...')
    } 
    else {
      this.map.flyTo(this.locationMarker.getLatLng())  
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
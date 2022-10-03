import { Component, AfterViewInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../../services/map.service';
import * as turf from '@turf/turf';
import Neighbordhoods from '../../data/ctgneighborhoods.json'

@Component({
  selector: 'app-neighborhoods',
  template: ``,
  styleUrls: ['./neighborhoods.component.scss']
})
export class NeighborhoodsComponent implements AfterViewInit, OnDestroy {

  @Output() selectNeigborhood: EventEmitter < any > = new EventEmitter();

  @Input() latLon = { lat: '0', lon : '0'}
  private neighborhoodClickedName: string = '';

  private myGeoJSON: any = Neighbordhoods;

  private neighborhoodsLayer = L.geoJSON(this.myGeoJSON);

  constructor(private mapService: MapService) {}

  ngAfterViewInit(): void {
    this.initNeighborhoods();
  }

  ngOnDestroy(): void {
    this.mapService.getMapInstance().removeLayer(this.neighborhoodsLayer);
  }

  private initNeighborhoods() {

    this.neighborhoodsLayer.on('click', (e: L.LeafletMouseEvent) => {
      this.neighborhoodClickedName = e.sourceTarget.feature.properties.NOMBRE;

    }).addTo(this.mapService.getMapInstance())

    this.mapService.getMapInstance().on('click', () => {
      if (this.neighborhoodClickedName === '') {
        this.neighborhoodClickedName = 'none';
      }
        this.selectNeigborhood.emit(this.neighborhoodClickedName);
      this.neighborhoodClickedName = '';
    })

    if(!(this.latLon.lon === '0' && this.latLon.lat === '0')){
      this.getSearchLocationName();
    }

  }

  private getSearchLocationName(){
    const isMobile = window.innerWidth <= 600 ? true : false;
    setTimeout(() => {
      this.selectNeigborhood.emit(this.getPointInPolygonName(this.myGeoJSON.features));
      if(isMobile)
        this.mapService.getMapInstance().flyTo([Number.parseFloat(this.latLon.lat)-0.01, Number.parseFloat(this.latLon.lon)], 14);
      else
        this.mapService.getMapInstance().flyTo([Number.parseFloat(this.latLon.lat), Number.parseFloat(this.latLon.lon)+0.01], 14);

      }, 100);
  }

  private getPointInPolygonName(polygonGroup:any):string{
    const point = turf.point([Number.parseFloat(this.latLon.lon), Number.parseFloat(this.latLon.lat)])

    let polygon:any[];
    let turfPolygon:any;
    let within:any;

    for(let i = 0; i < polygonGroup.length; i++){
      polygon = polygonGroup[i].geometry.coordinates[0];
      turfPolygon = turf.polygon(polygon);
      within = turf.within(point, turfPolygon);

      if(within.features.length > 0){
        const location:string = polygonGroup[i].properties.NOMBRE;
        return location;
      }
    }

    return 'none';
  }

}

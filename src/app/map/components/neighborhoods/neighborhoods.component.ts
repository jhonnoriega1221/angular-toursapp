import { Component, AfterViewInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-neighborhoods',
  template: ``,
  styleUrls: ['./neighborhoods.component.scss']
})
export class NeighborhoodsComponent implements AfterViewInit, OnDestroy {

  @Output() selectNeigborhood: EventEmitter < any > = new EventEmitter();

  @Input() latLon = { lat: '0', lon : '0'}
  private neighborhoodClickedName: string = '';


  private myGeoJSON: any = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
          "name": "El laguito"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -75.56259155273438,
                10.399034883983228
              ],
              [
                -75.5653166770935,
                10.397641936397523
              ],
              [
                -75.5645227432251,
                10.396945460274411
              ],
              [
                -75.56379318237305,
                10.395594714274758
              ],
              [
                -75.56244134902954,
                10.394265067975626
              ],
              [
                -75.56169033050537,
                10.39335752836267
              ],
              [
                -75.5605959892273,
                10.393146472260833
              ],
              [
                -75.55896520614624,
                10.392618831382425
              ],
              [
                -75.55817127227783,
                10.393568584321915
              ],
              [
                -75.55774211883545,
                10.394011801372136
              ],
              [
                -75.55752754211426,
                10.394813811578704
              ],
              [
                -75.55795669555664,
                10.39494044458098
              ],
              [
                -75.55877208709715,
                10.394898233585922
              ],
              [
                -75.55952310562134,
                10.395024866553962
              ],
              [
                -75.56063890457153,
                10.395130393988115
              ],
              [
                -75.56134700775146,
                10.395235921386593
              ],
              [
                -75.56192636489868,
                10.395594714274758
              ],
              [
                -75.5622911453247,
                10.3962911934104
              ],
              [
                -75.56203365325928,
                10.397093197763667
              ],
              [
                -75.56171178817749,
                10.397240935183026
              ],
              [
                -75.56259155273438,
                10.399034883983228
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Bocagrande"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -75.5625057220459,
                10.399129857455945
              ],
              [
                -75.5615723133087,
                10.397272593192369
              ],
              [
                -75.55795669555664,
                10.395468081537764
              ],
              [
                -75.55349349975586,
                10.398000726521353
              ],
              [
                -75.54830074310303,
                10.409735046777953
              ],
              [
                -75.54619789123535,
                10.410579225462538
              ],
              [
                -75.54684162139893,
                10.414335792896207
              ],
              [
                -75.5513048171997,
                10.418936471116536
              ],
              [
                -75.55319309234618,
                10.418598808969406
              ],
              [
                -75.55169105529785,
                10.41513775086747
              ],
              [
                -75.55259227752686,
                10.409186329407646
              ],
              [
                -75.55606842041016,
                10.40496539428927
              ],
              [
                -75.5625057220459,
                10.399129857455945
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Castillogrande"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -75.55413722991943,
                10.397599725767629
              ],
              [
                -75.55772066116333,
                10.395404765150019
              ],
              [
                -75.55720567703247,
                10.394771600566546
              ],
              [
                -75.55527448654175,
                10.394644967495823
              ],
              [
                -75.54797887802124,
                10.3906982110596
              ],
              [
                -75.54606914520264,
                10.390423835764006
              ],
              [
                -75.54476022720337,
                10.390318306740022
              ],
              [
                -75.5444598197937,
                10.39141580684745
              ],
              [
                -75.54598331451416,
                10.392745465274507
              ],
              [
                -75.55413722991943,
                10.397599725767629
              ]
            ]
          ]
        }
      }
    ]
  }

  private neighborhoodsLayer = L.geoJSON(this.myGeoJSON);

  constructor(private mapService: MapService) {}

  ngAfterViewInit(): void {
    this.initNeighborhoods();
  }

  ngOnDestroy(): void {
    this.mapService.getMapInstance().removeLayer(this.neighborhoodsLayer);
  }

  private initNeighborhoods() {
    //const latLng = L.latLng(Number.parseFloat(this.latLon.lat), Number.parseFloat(this.latLon.lon));

    this.neighborhoodsLayer.on('click', (e: L.LeafletMouseEvent) => {
      this.neighborhoodClickedName = e.sourceTarget.feature.properties.name;
    }).addTo(this.mapService.getMapInstance())

    this.mapService.getMapInstance().on('load', (evt:L.LeafletEvent) => {
      if (this.neighborhoodClickedName === '') {
        this.neighborhoodClickedName = 'none';
      }
      this.selectNeigborhood.emit(this.neighborhoodClickedName);
      this.neighborhoodClickedName = '';
    })

  }

}

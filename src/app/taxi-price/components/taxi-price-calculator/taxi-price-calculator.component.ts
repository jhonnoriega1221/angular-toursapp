import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PlaceService } from '../../../place/services/place.service';
import { TaxiPriceCalculatorService } from '../../services/taxi-price-calculator.service';
import { LocationPlace } from '../../../place/models/place';

interface Place {
  name: string
}

@Component({
  selector: 'app-taxi-price-calculator',
  templateUrl: './taxi-price-calculator.component.html',
  styleUrls: ['./taxi-price-calculator.component.scss']
})

export class TaxiPriceCalculatorComponent implements OnInit {

  @Output() selectLocation: EventEmitter < any > = new EventEmitter();
  @Input() placeName?:string;
  @Input() isOrigin!:boolean;
  public locationInputLabel?:string;
  private originPlaceSelectText:string = '';
  private destinationPlaceSelectText:string = '';
  private searchPlaceInterval: any = 0;
  public isSearching:boolean = false;
  public locationPlaces: LocationPlace[] = [];

  public place!: string | undefined;

  public places: Place[] = [
    { name: 'Bocagrande' },
    { name: 'Crespo' },
    { name: 'Canapote' },
    { name: 'Centro' },
    { name: 'Castillogrande' },
    { name: 'El laguito' },
    { name: 'Pie de la popa' }
  ];

  constructor(private taxiPriceCalculatorService: TaxiPriceCalculatorService, private translate:TranslateService, private locationService:PlaceService) {}

  ngOnInit(): void {
    this.translateComponent();
    this.locationInputLabel = this.isOrigin ? this.originPlaceSelectText : this.destinationPlaceSelectText;
    this.place = this.placeName;
  }

  public changePlace() {
    if(typeof this.place === 'number'){
      const latlon = {'lat': this.locationPlaces[this.place].lat, 'lon': this.locationPlaces[this.place].lon}
      console.log(latlon);
      this.selectLocation.emit({'place': 'search', 'isOrigin': this.isOrigin, 'latlon': latlon});
    } else {
      this.selectLocation.emit({'place': this.place, 'isOrigin': this.isOrigin});

    }
  }

  getSearchPlaces(): void {
    this.locationPlaces = [];
    clearTimeout(this.searchPlaceInterval);
    if (this.place === '') {
      this.isSearching = false;
    } else {
      this.isSearching = true;
      
      this.searchPlaceInterval = setTimeout(() => {
        this.locationService.search(this.place).subscribe(
          {
            next: (v) => { this.locationPlaces = v },
            error: (e) => {
              console.log(e);
              this.isSearching = false;
            },
            complete: () => { this.isSearching = false }
          }
        )
      }, 400);
    }
  }

  private translateComponent() {
    this.translate.get("TOURIST_SERVICES.TRANSPORT")
    .subscribe({
      next: (v) => {
        this.originPlaceSelectText = v.ORIGIN_PLACE_INPUT_PLACEHOLDER_TEXT;
        this.destinationPlaceSelectText = v.DESTINATION_PLACE_INPUT_PLACEHOLDER_TEXT;
      }
    })
  }

}

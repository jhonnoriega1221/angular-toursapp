import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TaxiPriceCalculatorService } from '../../services/taxi-price-calculator.service';

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

  constructor(private taxiPriceCalculatorService: TaxiPriceCalculatorService) {}

  ngOnInit(): void {
    this.locationInputLabel = this.isOrigin ? 'Lugar de origen' : 'Lugar de destino';
    this.place = this.placeName;
  }

  public changePlace() {
      this.selectLocation.emit({'place': this.place, 'isOrigin': this.isOrigin});
  }

}

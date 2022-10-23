import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CurrencyExchangeService } from '../../services/currency-exchange.service';
import { CurrencyConversion } from '../../models/currency-conversion';
import { Currency } from '../../models/currency';

@Component({
  selector: 'app-home-currency-exchange',
  templateUrl: './home-currency-exchange.component.html',
  styleUrls: ['./home-currency-exchange.component.scss'],
  animations: [
    trigger('showUpdateDate', [
      state('visible', style({
        'opacity': 1,
      })),
      transition('invisible => visible', animate(800))
    ])
  ]
})
export class HomeCurrencyExchangeComponent implements OnInit {

  public updateDateState: string = 'invisible';
  public isLoading: boolean = true;
  public isError: boolean = false;
  public conversion: CurrencyConversion = {
    date: '',
    from: 'usd',
    to: 'cop',
    fromValue: 1,
    baseValue:0,
    toValue: 0
  };

  public currenciesList:Currency[] = this.currencyExchangeService.currenciesName();

  constructor(public currencyExchangeService: CurrencyExchangeService) {}

  ngOnInit(): void {
    this.updateCurrencyData(this.conversion.from,this.conversion.to);
  }

  public updateCurrencyData(from: string, to: string) {
    this.isLoading = true;
    this.currencyExchangeService.getCurrencyExchange(from)
      .subscribe({
        next: (v) => {
          this.updateDateState = 'visible';
          const conversion = {
            "date": Object.entries(v)[0][1],
            "value": Object.entries(v)[1][1]
          }

          this.conversion.toValue = this.conversion.fromValue == undefined ? conversion.value * 0 : conversion.value * this.conversion.fromValue;
          this.conversion.date = conversion.date;
          this.conversion.baseValue = conversion.value;
        },
        error: (e) => {
          this.isError = true;
          console.error(e);
        },
        complete: () => this.isLoading = false
      });
  }

  public updateCurrencyFromValue(input:number|undefined){
    this.conversion.toValue = input == undefined ? this.conversion.baseValue * 0 : this.conversion.baseValue * input;
  }

}

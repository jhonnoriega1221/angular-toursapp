import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { CurrencyExchangeService } from '../../services/currency-exchange.service';
import { CurrencyConversion } from '../../models/currency-conversion';

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
    from: '',
    to: '',
    value: 0
  };

  constructor(public currencyExchangeService: CurrencyExchangeService) {}

  ngOnInit(): void {
    this.updateCurrencyData('usd');
  }

  private updateCurrencyData(from: String) {
    this.currencyExchangeService.getCurrencyExchange(from)
      .subscribe({
        next: (v) => {
          this.updateDateState = 'visible';
          const temporalConversion: CurrencyConversion = {
            date: v.date,
            from: from,
            to: "cop",
            value: v.cop
          };

          this.conversion = temporalConversion;
        },
        error: (e) => {
          this.isError = true;
          console.error(e);
        },
        complete: () => this.isLoading = false
      });
  }

}

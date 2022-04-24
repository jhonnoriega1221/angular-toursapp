import { Component, OnInit } from '@angular/core';
import { CurrencyExchangeService } from '../../services/currency-exchange.service';
import { CurrencyConversion } from '../../models/currency-conversion';

@Component({
  selector: 'app-home-currency-exchange',
  templateUrl: './home-currency-exchange.component.html',
  styleUrls: ['./home-currency-exchange.component.scss']
})
export class HomeCurrencyExchangeComponent implements OnInit {

  public conversion: CurrencyConversion = {
    date: '',
    from: '',
    to: '',
    value:0
  };

  constructor( public currencyExchangeService: CurrencyExchangeService) { }

  ngOnInit(): void {
    this.updateCurrencyData('usd');
  }

  private updateCurrencyData (from:String) {
    this.currencyExchangeService.getCurrencyExchange(from).subscribe(data => {

      const temporalConversion:CurrencyConversion = {
        date: data.date,
        from: from,
        to: "cop",
        value: data.cop
      };

      this.conversion = temporalConversion;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface homeTranslations {
  GREETINGS: string;
  TIP: string;
  EXCHANGE_RATE: {
    TITLE: string;
    UPDATED_AT: string;
  },
  PRICES_LIST: {
    TITLE: string;
    PRODUCTS_BUTTON: string;
    SERVICES_BUTTON: string;
  }
}

export interface homeButton {
  color: string;
  text: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-home-price-lists-buttons',
  templateUrl: './home-price-lists-buttons.component.html',
  styleUrls: ['./home-price-lists-buttons.component.scss']
})
export class HomePriceListsButtonsComponent implements OnInit {

  public priceListButtons: homeButton[] = [
    { color: 'accent', text: 'Productos', icon: 'ballot', route: '/products' },
    { color: 'primary', text: 'Servicios', icon: 'tour', route: '/services' }
  ];

  constructor( public translate:TranslateService) {
      translate.get("HOME")
    .subscribe ({
      next: (v:homeTranslations) => { 
        this.priceListButtons[0].text = v.PRICES_LIST.PRODUCTS_BUTTON;
        this.priceListButtons[1].text = v.PRICES_LIST.SERVICES_BUTTON;
      },
      error: (e) => { console.log(e)},
      complete: () => {}
    })

  }

  ngOnInit(): void {}

}

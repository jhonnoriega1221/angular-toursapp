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

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  public homeWidgetsTitle:any[] = [
    'EXCHANGE_RATE.TITLE'
  ]
  
  constructor( public translate:TranslateService ){
    translate.get("HOME")
    .subscribe ({
      next: (v:homeTranslations) => { 
        this.homeWidgetsTitle[0] = v.EXCHANGE_RATE.TITLE;
      },
      error: (e) => { console.log(e)},
      complete: () => {}
    })
  }

  ngOnInit(): void {
  }
}

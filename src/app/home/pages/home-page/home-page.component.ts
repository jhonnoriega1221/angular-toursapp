import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface homeButton {
  color: string;
  text: string;
  icon: string;
  route: string;
}

interface categoryButton {
  text:string;
  background:string;
  icon: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {

  public homeWidgetsTitle:any[] = []

  public priceListButtons: homeButton[] = [
    { color: 'accent', text: 'Productos', icon: 'ballot', route: '/products' },
    { color: 'primary', text: 'Servicios', icon: 'tour', route: '/services' }
  ];
  
  constructor( private translate:TranslateService ){ }

  ngOnInit(): void {
    this.translatePage();
  }

  private translatePage():void {
    this.translate.get("HOME")
    .subscribe ({
      next: (v) => {
        this.priceListButtons[0].text = v.PRICES_LIST.PRODUCTS_BUTTON;
        this.priceListButtons[1].text = v.PRICES_LIST.SERVICES_BUTTON;
        this.homeWidgetsTitle.push({text: v.WIDGETS.EXCHANGE_RATE.TITLE});
      },
      error: (e) => { console.log(e); },
      complete: () => {}
    })
  }
}

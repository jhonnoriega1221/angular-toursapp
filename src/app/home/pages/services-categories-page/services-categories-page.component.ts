import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface categoryButton {
  text:string;
  background:string;
  icon: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-services-categories-page',
  templateUrl: './services-categories-page.component.html',
  styleUrls: ['./services-categories-page.component.scss']
})
export class ServicesCategoriesPageComponent implements OnInit {

  @Input() showBackTitle:boolean = true;

  public pageTitle:string = 'HOME.SERVICES_BUTTONS.TITLE'

  public categoriesListButtons:categoryButton[] = [
    { text: 'TRANSPORT_BUTTON', background: '../../../../assets/transport_button_bg.jpg', icon: 'local_taxi', route: '/services/taxi-prices', color:'#c49000' },
    { text: 'MUSEUM_BUTTON', background: '../../../../assets/museum_button_bg.jpg', icon: 'museum', route: '/services/museum', color:'#6a0080' },
    { text: 'BEACH_BUTTON', background: '../../../../assets/beach_button_bg.jpg', icon: 'beach_access', route: '/services/beach', color:'#0077c2' },
    { text: 'RESTAURANT_BUTTON', background: '../../../../assets/restaurant_button_bg.jpg', icon: 'restaurant', route: '/services/food', color:'#8c7b75' },
    { text: 'TRAVELS_RIDES_BUTTON', background: '../../../../assets/tour_button_bg.jpg', icon: 'route', route: '/services/tour-prices', color:'#004c40' }
  ];

  constructor( private translate:TranslateService) { }

  ngOnInit(): void {
    this.getTranslations();
  }

  private getTranslations(){
    this.translate.get("HOME.SERVICES_BUTTONS").subscribe({
      next: (v) => {
        this.pageTitle = v.TITLE;
        this.categoriesListButtons[0].text = v.TRANSPORT_BUTTON;
        this.categoriesListButtons[1].text = v.MUSEUM_BUTTON;
        this.categoriesListButtons[2].text = v.BEACH_BUTTON;
        this.categoriesListButtons[3].text = v.RESTAURANT_BUTTON;
        this.categoriesListButtons[4].text = v.TRAVELS_RIDES_BUTTON;
      }
    })
  }

}

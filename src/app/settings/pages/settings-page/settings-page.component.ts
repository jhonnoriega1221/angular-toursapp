import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {

  public isInConfig:boolean = this.setIsInConfig(this.router.url.split('/').length);
  public isMobile:boolean = this.setIsMobile(window.innerWidth);

  constructor( private router:Router) {
    //Se subscribe al evento del router para detectar cada vez que se cambia de ruta (NavigationEnd)
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        const routerUrl:string[] = this.router.url.split('/');
        this.isInConfig = this.setIsInConfig(routerUrl.length);
      }
    })
  }

  //Detecta cada vez que se cambia el tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    const innerWidth:number = event.target.innerWidth;
    this.isMobile = this.setIsMobile(innerWidth);
  }

  private setIsInConfig(routerUrlLenght:number):boolean {
    const isInConfig = routerUrlLenght > 2 ? true : false;
    return isInConfig;
  }

  private setIsMobile(innerWidth:number):boolean {
    const isMobile = innerWidth <= 600 ? true : false
    return isMobile;
  }

}

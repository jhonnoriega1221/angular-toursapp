import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Renderer2 } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TourSupp';
  
  offlineEvent?: Observable<Event>;
  onlineEvent?: Observable<Event>;
  subscriptions: Subscription[] = [];

  constructor(
    public translate: TranslateService,
    public renderer: Renderer2
  ) {
    /* Idiomas: Español: es, Inglés: en, Francés: fr, Portugués: pr, Alemán: ge, Italiano: it, Japonés, jp */
    translate.addLangs(['en', 'es', 'fr', 'pr', 'ge', 'it', 'jp']);
    this.configDefaultLanguage(localStorage.getItem('app_language'));
    this.configDefaultTheme(localStorage.getItem('app_theme'));
    this.setFirstTime(localStorage.getItem('ft'));
    this.handleAppConnectivityChanges();
  }

  private setFirstTime(firstTime: string | null){
    if(firstTime === null || firstTime === undefined ){
      localStorage.setItem('ft', 'true');
    }
  }

  private configDefaultLanguage(appLanguage: string | null) {
    if (appLanguage === null || appLanguage === undefined) {
      this.translate.setDefaultLang(navigator.language.substring(0, 2));
      localStorage.setItem('app_language', 'auto');
    } else if (localStorage.getItem('app_language') === 'auto') {
      this.translate.setDefaultLang(navigator.language.substring(0, 2));
    } else {
      this.translate.setDefaultLang(appLanguage)
    }
  }

  private configDefaultTheme(appTheme: string | null) {

    const setDefaultTheme = (isDark:boolean) => {
      if (isDark) {
        this.renderer.addClass(document.body, 'dark-mode');
      } else {
        this.renderer.removeClass(document.body, 'dark-mode')
      }
    }

    if (appTheme === null || appTheme === undefined) {
      localStorage.setItem('app_theme', 'auto');
      setDefaultTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else if (localStorage.getItem('app_theme') === 'auto') {
      setDefaultTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      setDefaultTheme(appTheme === 'dark');
    }
  }

  private handleAppConnectivityChanges(): void {
    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.subscriptions.push(this.onlineEvent.subscribe(e => {
      // handle online mode
      console.log('Online...');
    }));

    this.subscriptions.push(this.offlineEvent.subscribe(e => {
      // handle offline mode
      console.log('Offline...');
    }));
  }
}

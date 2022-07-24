import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TourSupp';

  constructor(
    public translate: TranslateService,
    public renderer: Renderer2
  ) {
    translate.addLangs(['en', 'es']);
    this.configDefaultLanguage(localStorage.getItem('app_language'));
    this.configDefaultTheme(localStorage.getItem('app_theme'));
    this.setFirstTime(localStorage.getItem('ft'));
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
}

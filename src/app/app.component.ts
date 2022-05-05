import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-toursapp';

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'es']);
    this.configDefaultLanguage(localStorage.getItem('app_language'));
  }

  private configDefaultLanguage(appLanguage: string | null) {
    if (appLanguage === null || appLanguage === undefined) {
      this.translate.setDefaultLang(navigator.language);
      localStorage.setItem('app_language', 'auto');
    } else if (localStorage.getItem('app_language') === 'auto') {
      this.translate.setDefaultLang(navigator.language);
    } else {
      this.translate.setDefaultLang(appLanguage)
    }
  }

}

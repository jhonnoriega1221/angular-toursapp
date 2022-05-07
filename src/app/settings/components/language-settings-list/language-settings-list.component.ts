import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-settings-list',
  templateUrl: './language-settings-list.component.html',
  styleUrls: ['./language-settings-list.component.scss']
})
export class LanguageSettingsListComponent implements OnInit {

  public appLanguage = localStorage.getItem('app_language');

  constructor (
    public translate:TranslateService
  ){
  }

  ngOnInit(): void {
  }

  public translateLanguageTo(lang: string){
    if(lang === 'auto'){
      this.translate.use(navigator.language.substring(0,2))
    } else{
      this.translate.use(lang);
    }
    localStorage.setItem('app_language', lang);
  }

}

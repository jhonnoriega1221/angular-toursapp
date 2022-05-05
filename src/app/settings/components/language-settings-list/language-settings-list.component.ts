import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-settings-list',
  templateUrl: './language-settings-list.component.html',
  styleUrls: ['./language-settings-list.component.scss']
})
export class LanguageSettingsListComponent implements OnInit {

  constructor (
    public translate:TranslateService
  ){
  }

  ngOnInit(): void {
  }

  public translateLanguageTo(lang: string){
    this.translate.use(lang);
  }

}

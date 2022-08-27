import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface filterButton {
  text:string;
  active:boolean;
}

@Component({
  selector: 'app-filter-buttons-group',
  templateUrl: './filter-buttons-group.component.html',
  styleUrls: ['./filter-buttons-group.component.scss']
})
export class FilterButtonsGroupComponent implements OnInit {

  public filterButtons:filterButton[] = [
    {text: 'Todos', active: true}
  ]

  constructor(private translate:TranslateService) { }

  ngOnInit(): void {
    this.translateComponent();
  }

  private translateComponent(){
    this.translate.get("FILTER")
    .subscribe({
      next: (v) => {
        this.filterButtons[0].text = v.CATEGORIES_LIST.ALL
      }
    })
  }

}

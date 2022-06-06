import { Component, OnInit } from '@angular/core';

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
    {text: 'Cercanos', active: true},
    {text: 'Destacados', active: false},
    {text: 'Populares', active: false}
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

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
    {text: 'Todos', active: true}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

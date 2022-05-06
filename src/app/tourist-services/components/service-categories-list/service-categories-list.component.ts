import { Component, OnInit, Input } from '@angular/core';

interface categoryButton {
  text:string;
  background:string;
  icon: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-service-categories-list',
  templateUrl: './service-categories-list.component.html',
  styleUrls: ['./service-categories-list.component.scss']
})
export class ServiceCategoriesListComponent implements OnInit {

  @Input() categoriesListButtons:categoryButton[] = [];

  

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../../models/food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  
  @Input() foods:Food[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

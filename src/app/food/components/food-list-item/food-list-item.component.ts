import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-list-item',
  templateUrl: './food-list-item.component.html',
  styleUrls: ['./food-list-item.component.scss']
})
export class FoodListItemComponent implements OnInit {

  @Input() itemUrl = ['',0];
  @Input() urlImage = '';
  @Input() rowOneText = '';
  @Input() rowTwoText = 0;
  @Input() rowThreeText = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

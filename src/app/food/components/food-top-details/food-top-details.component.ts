import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-top-details',
  templateUrl: './food-top-details.component.html',
  styleUrls: ['./food-top-details.component.scss']
})
export class FoodTopDetailsComponent implements OnInit {

  @Input() name = '';

  constructor() { }

  ngOnInit(): void {
  }

}

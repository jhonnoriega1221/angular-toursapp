import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-top-details',
  templateUrl: './food-top-details.component.html',
  styleUrls: ['./food-top-details.component.scss']
})
export class FoodTopDetailsComponent implements OnInit {

  @Input() name = '';
  @Input() rate = 0;
  @Input() location = '';
  @Input() distance = 0;
  @Input() description = '';

  constructor() { }

  ngOnInit(): void {
  }

}

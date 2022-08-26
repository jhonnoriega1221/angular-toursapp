import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-details-picture',
  templateUrl: './food-details-picture.component.html',
  styleUrls: ['./food-details-picture.component.scss']
})
export class FoodDetailsPictureComponent implements OnInit {

  @Input() imageUrl:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

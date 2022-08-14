import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../models/tours';

@Component({
  selector: 'app-tour-list-item',
  templateUrl: './tour-list-item.component.html',
  styleUrls: ['./tour-list-item.component.scss']
})
export class TourListItemComponent implements OnInit {

  @Input() tourType:string = "";
  @Input() tourName:string = "";
  @Input() url = ['',0];
  @Input() tourPlaces:Place[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

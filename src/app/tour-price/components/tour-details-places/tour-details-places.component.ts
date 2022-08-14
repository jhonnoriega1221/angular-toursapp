import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../models/tours';

@Component({
  selector: 'app-tour-details-places',
  templateUrl: './tour-details-places.component.html',
  styleUrls: ['./tour-details-places.component.scss']
})
export class TourDetailsPlacesComponent implements OnInit {

  @Input() places:Place[] = []

  constructor() { }

  ngOnInit(): void {}

}

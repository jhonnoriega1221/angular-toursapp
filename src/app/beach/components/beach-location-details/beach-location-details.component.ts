import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beach-location-details',
  templateUrl: './beach-location-details.component.html',
  styleUrls: ['./beach-location-details.component.scss']
})
export class BeachLocationDetailsComponent implements OnInit {

  @Input() locationPictureUrl:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

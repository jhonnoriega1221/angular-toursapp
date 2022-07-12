import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tour-details-picture',
  templateUrl: './tour-details-picture.component.html',
  styleUrls: ['./tour-details-picture.component.scss']
})
export class TourDetailsPictureComponent implements OnInit {

  @Input() imageUrl:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tour-details-heading',
  templateUrl: './tour-details-heading.component.html',
  styleUrls: ['./tour-details-heading.component.scss']
})
export class TourDetailsHeadingComponent implements OnInit {

  @Input() type:string = '';
  @Input() name:string = '';
  @Input() description:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

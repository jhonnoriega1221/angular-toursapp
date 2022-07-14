import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beach-image-details',
  templateUrl: './beach-image-details.component.html',
  styleUrls: ['./beach-image-details.component.scss']
})
export class BeachImageDetailsComponent implements OnInit {

  @Input() imageUrl:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

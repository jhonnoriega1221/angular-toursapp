import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beach-services-details',
  templateUrl: './beach-services-details.component.html',
  styleUrls: ['./beach-services-details.component.scss']
})
export class BeachServicesDetailsComponent implements OnInit {

  @Input() tent:number = 0;
  @Input() chairs:number = 0;
  @Input() jetsky:number = 0;
  @Input() massage:number = 0;
  @Input() braids:number = 0;
  @Input() worm:number = 0;
  @Input() boatDish:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

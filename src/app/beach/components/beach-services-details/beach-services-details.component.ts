import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../models/beach';

@Component({
  selector: 'app-beach-services-details',
  templateUrl: './beach-services-details.component.html',
  styleUrls: ['./beach-services-details.component.scss']
})
export class BeachServicesDetailsComponent implements OnInit {

  @Input() services:Service[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beach-top-details',
  templateUrl: './beach-top-details.component.html',
  styleUrls: ['./beach-top-details.component.scss']
})
export class BeachTopDetailsComponent implements OnInit {
  
  @Input() name:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

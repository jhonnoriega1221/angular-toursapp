import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beach-schedule-details',
  templateUrl: './beach-schedule-details.component.html',
  styleUrls: ['./beach-schedule-details.component.scss']
})
export class BeachScheduleDetailsComponent implements OnInit {

  @Input() schedule:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

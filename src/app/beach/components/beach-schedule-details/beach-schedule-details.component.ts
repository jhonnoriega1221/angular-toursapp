import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from '../../models/beach';

@Component({
  selector: 'app-beach-schedule-details',
  templateUrl: './beach-schedule-details.component.html',
  styleUrls: ['./beach-schedule-details.component.scss']
})
export class BeachScheduleDetailsComponent implements OnInit {

  @Input() schedule:Schedule = { close_hour: '', open_hour: '' };

  constructor() { }

  ngOnInit(): void {
  }

}

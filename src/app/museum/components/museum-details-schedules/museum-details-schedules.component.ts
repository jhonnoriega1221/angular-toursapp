import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from '../../models/museum';

@Component({
  selector: 'app-museum-details-schedules',
  templateUrl: './museum-details-schedules.component.html',
  styleUrls: ['./museum-details-schedules.component.scss']
})
export class MuseumDetailsSchedulesComponent implements OnInit {

  @Input() schedules:Schedule[] = [];
  @Input() title:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

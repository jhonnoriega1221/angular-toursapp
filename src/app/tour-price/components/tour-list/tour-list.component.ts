import { Component, OnInit, Input } from '@angular/core';
import { Tours } from '../../models/tours';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {

  @Input() tours:Tours[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

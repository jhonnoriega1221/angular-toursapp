import { Component, OnInit, Input } from '@angular/core';
import { Beach } from '../../models/beach';

@Component({
  selector: 'app-beach-list',
  templateUrl: './beach-list.component.html',
  styleUrls: ['./beach-list.component.scss']
})
export class BeachListComponent implements OnInit {

  @Input() beaches:Beach[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Museum } from '../../models/museum';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.scss']
})
export class MuseumListComponent implements OnInit {

  @Input() museums:Museum[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

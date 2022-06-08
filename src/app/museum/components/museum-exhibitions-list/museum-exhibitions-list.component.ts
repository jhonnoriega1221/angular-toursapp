import { Component, OnInit, Input } from '@angular/core';
import { Exhibition } from '../../models/exhibition';

@Component({
  selector: 'app-museum-exhibitions-list',
  templateUrl: './museum-exhibitions-list.component.html',
  styleUrls: ['./museum-exhibitions-list.component.scss']
})
export class MuseumExhibitionsListComponent implements OnInit {

  @Input() exhibitions:Exhibition[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

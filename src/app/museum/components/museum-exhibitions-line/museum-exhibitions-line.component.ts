import { Component, OnInit, Input } from '@angular/core';
import { Exhibition } from '../../models/exhibition';

@Component({
  selector: 'app-museum-exhibitions-line',
  templateUrl: './museum-exhibitions-line.component.html',
  styleUrls: ['./museum-exhibitions-line.component.scss']
})
export class MuseumExhibitionsLineComponent implements OnInit {

  @Input() exhibitions:Exhibition[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

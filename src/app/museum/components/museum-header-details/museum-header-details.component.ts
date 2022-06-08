import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-museum-header-details',
  templateUrl: './museum-header-details.component.html',
  styleUrls: ['./museum-header-details.component.scss']
})
export class MuseumHeaderDetailsComponent implements OnInit {

  @Input() name = '';
  @Input() rate = 0;
  @Input() location = '';
  @Input() distance = 0;
  @Input() description = '';

  constructor() { }

  ngOnInit(): void {
  }

}

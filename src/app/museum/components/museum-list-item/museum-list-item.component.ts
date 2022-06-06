import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-museum-list-item',
  templateUrl: './museum-list-item.component.html',
  styleUrls: ['./museum-list-item.component.scss']
})
export class MuseumListItemComponent implements OnInit {

  @Input() name = '';
  @Input() imageUrl = '';
  @Input() location = '';
  @Input() distance = 0;
  @Input() exhibitions = 0;
  @Input() rating = 0;
  @Input() url = ['',0];

  constructor() { }

  ngOnInit(): void {
  }

}

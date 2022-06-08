import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-museum-picture',
  templateUrl: './museum-picture.component.html',
  styleUrls: ['./museum-picture.component.scss']
})
export class MuseumPictureComponent implements OnInit {

  @Input() imageUrl:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

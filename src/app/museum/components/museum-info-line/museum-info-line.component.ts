import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-museum-info-line',
  templateUrl: './museum-info-line.component.html',
  styleUrls: ['./museum-info-line.component.scss']
})
export class MuseumInfoLineComponent implements OnInit {

  @Input() title:string = '';
  @Input() info:string = '';
  @Input() info2:string = '';
  @Input() isPrices:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Price, Schedule } from '../../models/museum';

@Component({
  selector: 'app-museum-info-line',
  templateUrl: './museum-info-line.component.html',
  styleUrls: ['./museum-info-line.component.scss']
})
export class MuseumInfoLineComponent implements OnInit {

  @Input() datas:any[] = [];
  @Input() title:string = '';
  @Input() isPrices:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

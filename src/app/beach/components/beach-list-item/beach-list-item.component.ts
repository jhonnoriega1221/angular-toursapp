import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from '../../models/beach';

@Component({
  selector: 'app-beach-list-item',
  templateUrl: './beach-list-item.component.html',
  styleUrls: ['./beach-list-item.component.scss']
})
export class BeachListItemComponent implements OnInit {

  @Input() name:string = '';
  @Input() id:number = 0;
  @Input() imageUrl:string = '';
  @Input() schedule:Schedule[] = [];
  @Input() location:string = '';
  @Input() distance:number = 0;
  @Input() url = ['',0];
  

  constructor() { }

  ngOnInit(): void {
  }

}

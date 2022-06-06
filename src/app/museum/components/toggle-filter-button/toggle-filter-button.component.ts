import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-filter-button',
  templateUrl: './toggle-filter-button.component.html',
  styleUrls: ['./toggle-filter-button.component.scss']
})
export class ToggleFilterButtonComponent implements OnInit {

  @Input() text:string = '';
  @Input() active:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

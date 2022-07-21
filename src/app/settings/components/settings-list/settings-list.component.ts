import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit {

  @Input() isMobile:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

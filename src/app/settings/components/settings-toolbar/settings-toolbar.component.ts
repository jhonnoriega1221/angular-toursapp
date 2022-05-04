import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings-toolbar',
  templateUrl: './settings-toolbar.component.html',
  styleUrls: ['./settings-toolbar.component.scss']
})
export class SettingsToolbarComponent implements OnInit {

  constructor( private location:Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

}

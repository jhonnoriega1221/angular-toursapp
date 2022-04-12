import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-navbar-button',
  templateUrl: './app-navbar-button.component.html',
  styleUrls: ['./app-navbar-button.component.scss']
})
export class AppNavbarButtonComponent implements OnInit {

  @Input() icon = '';
  @Input() text = '';
  @Input() route = '';

  constructor() { }

  ngOnInit(): void {
  }

}

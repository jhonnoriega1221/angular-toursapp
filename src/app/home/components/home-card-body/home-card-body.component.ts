import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-card-body',
  templateUrl: './home-card-body.component.html',
  styleUrls: ['./home-card-body.component.scss']
})
export class HomeCardBodyComponent implements OnInit {

  @Input() homeCardTitle:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

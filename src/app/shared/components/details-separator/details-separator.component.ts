import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-separator',
  templateUrl: './details-separator.component.html',
  styleUrls: ['./details-separator.component.scss']
})
export class DetailsSeparatorComponent implements OnInit {

  @Input() title:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

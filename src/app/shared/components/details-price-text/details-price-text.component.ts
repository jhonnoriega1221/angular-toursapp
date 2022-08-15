import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-price-text',
  templateUrl: './details-price-text.component.html',
  styleUrls: ['./details-price-text.component.scss']
})
export class DetailsPriceTextComponent implements OnInit {

  @Input() icon:string = 'attach_money';
  @Input() title:string = '';
  @Input() text:string | number = '';


  constructor() { }

  ngOnInit(): void {
  }

}

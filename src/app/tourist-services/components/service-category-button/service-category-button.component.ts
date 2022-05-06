import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-category-button',
  templateUrl: './service-category-button.component.html',
  styleUrls: ['./service-category-button.component.scss']
})
export class ServiceCategoryButtonComponent implements OnInit {

  @Input() text = '';
  @Input() color = '';
  @Input() icon = '';
  @Input() background = '';
  @Input() route = '';
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.background)
  }

}

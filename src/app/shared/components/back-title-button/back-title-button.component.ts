import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-back-title-button',
  templateUrl: './back-title-button.component.html',
  styleUrls: ['./back-title-button.component.scss']
})
export class BackTitleButtonComponent implements OnInit {

  @Input() viewTitle = '';

  constructor( private navigation: NavigationService) { }

  ngOnInit(): void {
  }

  back(): void {
    this.navigation.back();
  }

}

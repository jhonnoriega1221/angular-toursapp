import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  @Output() reload: EventEmitter<any> = new EventEmitter();

  reloadInfo(){
    this.reload.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

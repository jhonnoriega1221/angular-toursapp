import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-feedback-dialog-confirm',
  templateUrl: './feedback-dialog-confirm.component.html',
  styleUrls: ['./feedback-dialog-confirm.component.scss']
})
export class FeedbackDialogConfirmComponent implements OnInit {

  @Input() isConfirmDialog:boolean = false;
  @Input() message:string = '';
  @Input() icon:string = '';
  @Output() updateLocationPermission: EventEmitter < any > = new EventEmitter();

  public isSearchingLocation:boolean = false;

  constructor( private matSnackBar: MatSnackBar, private dialogRef: MatDialogRef<FeedbackDialogConfirmComponent>
 ) { }

  ngOnInit(): void {
  }

  public acceptLocation(isAccept:boolean) {

    if(!isAccept){
              this.updateLocationPermission.emit({'isAccept': isAccept});
              return;
    }

    if(navigator.geolocation) {
      console.log('buscando ubucacion')
      this.isSearchingLocation = true;
      navigator.geolocation.getCurrentPosition( (position) => {

        this.updateLocationPermission.emit({'isAccept': isAccept, 'location': [position.coords.latitude,position.coords.longitude]});

      }, (error) => {
        console.log(error);
        this.isSearchingLocation = false;
        //TODO => Mostrar aviso de error de ubicacion
        this.matSnackBar.open('No se pudo encontrar su ubicación', '', {
          verticalPosition: 'bottom',
          horizontalPosition: 'start',
          duration: 1500,
        })
      });


    } else {
      console.log('No support for geolocation');
    }
  }

  public closeDialog():void{
    this.dialogRef.close();
  }

}

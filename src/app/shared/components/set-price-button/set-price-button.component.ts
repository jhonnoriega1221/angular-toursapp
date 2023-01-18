import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SetPriceDialogComponent } from '../set-price-dialog/set-price-dialog.component';

@Component({
  selector: 'app-set-price-button',
  templateUrl: './set-price-button.component.html',
  styleUrls: ['./set-price-button.component.scss']
})
export class SetPriceButtonComponent implements OnInit {

  constructor( public dialog: MatDialog, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  public openDialog(){
    const dialogRef = this.dialog.open( SetPriceDialogComponent);

    dialogRef.afterClosed().subscribe( (result:any) => {
        if(result){

        }
    })
  }

}

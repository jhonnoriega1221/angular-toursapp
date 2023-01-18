import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-set-price-dialog',
  templateUrl: './set-price-dialog.component.html',
  styleUrls: ['./set-price-dialog.component.scss']
})
export class SetPriceDialogComponent implements OnInit {
  public setPriceForm:FormGroup;

  constructor(  private snackBar: MatSnackBar, private fb:FormBuilder, public dialogRef: MatDialogRef<SetPriceDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) {
    this.setPriceForm = this.fb.group({
      priceInput: new FormControl('', [Validators.required, Validators.min(1500), Validators.max(120000)])
    });
  }

  ngOnInit(): void {
  }

  setPrice(){
    if(this.setPriceForm.invalid){
      return;
    }

    this.snackBar.open('Se enviaron los comentarios correctamente', '' ,{
      duration: 2000,
      horizontalPosition: 'left',
      panelClass: 'app-snackbar'
    })
    this.dialogRef.close();

  }

}

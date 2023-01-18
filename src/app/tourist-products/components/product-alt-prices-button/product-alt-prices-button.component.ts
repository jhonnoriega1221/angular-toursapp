import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SetPriceDialogComponent } from 'src/app/shared/components/set-price-dialog/set-price-dialog.component';

@Component({
  selector: 'app-product-alt-prices-button',
  templateUrl: './product-alt-prices-button.component.html',
  styleUrls: ['./product-alt-prices-button.component.scss']
})
export class ProductAltPricesButtonComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openDialog(){
    const dialogRef = this.dialog.open( SetPriceDialogComponent);

  }

}

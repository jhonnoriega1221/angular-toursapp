import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductPriceDialogComponent } from '../product-price-dialog/product-price-dialog.component';

@Component({
  selector: 'app-product-alt-prices-button',
  templateUrl: './product-alt-prices-button.component.html',
  styleUrls: ['./product-alt-prices-button.component.scss']
})
export class ProductAltPricesButtonComponent implements OnInit {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductPriceDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }

}

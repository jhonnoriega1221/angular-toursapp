import { Component, OnInit } from '@angular/core';
import { ToursService } from '../../services/tours.service';
import { Tours } from '../../models/tours';

@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.scss']
})
export class ToursPageComponent implements OnInit {

  public tours: Tours[] = [];
  public isLoading:boolean = true;
  public isError:boolean = false;

  constructor( private tourService:ToursService ) { }

  ngOnInit(): void {
    this.getTours();
  }

  public getTours(): void {
    this.isLoading = true;
    this.isError = false;
    this.tourService.getTours()
      .subscribe({
        next: (v) => this.tours = v,
        error: (e) => {
          console.log(e);
          this.isError = true;
          this.isLoading = false;
        },
        complete: () => this.isLoading = false
      });
  }

}

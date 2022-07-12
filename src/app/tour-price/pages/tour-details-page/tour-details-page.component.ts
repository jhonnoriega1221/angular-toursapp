import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from '../../services/tours.service';
import { Tours } from '../../models/tours';

@Component({
  selector: 'app-tour-details-page',
  templateUrl: './tour-details-page.component.html',
  styleUrls: ['./tour-details-page.component.scss']
})
export class TourDetailsPageComponent implements OnInit {
  private tourId: number = 0;
  public isError: boolean = false;
  public isLoading: boolean = true;
  public tour: Tours = {
    id: 0,
    description: '',
    name: '',
    places: [],
    price: 0,
    routePictureUrl: '',
    type: ''

  }

  constructor(private tourService: ToursService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.tourId = params['id'];
      this.getRoute(this.tourId);
    })
  }

  private getRoute(id: number): void {

    this.isError = false;
    this.isLoading = true;
    this.tourService.getTour(id)
      .subscribe({
        next: (v) => this.tour = v,
        error: (e) => {
          this.isError = true;
          this.isLoading = false;
          console.error(e);
        },
        complete: () => this.isLoading = false
      });

  }

}

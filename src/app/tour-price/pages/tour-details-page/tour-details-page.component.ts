import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from '../../services/tours.service';
import { Tours } from '../../models/tours';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tour-details-page',
  templateUrl: './tour-details-page.component.html',
  styleUrls: ['./tour-details-page.component.scss']
})
export class TourDetailsPageComponent implements OnInit {
  public pageTitle:string = '';
  public separatorText:any[] = [];
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


  constructor(private tourService: ToursService, private activatedRoute: ActivatedRoute, private translate:TranslateService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.tourId = params['id'];
      this.getTour();
    })
    this.translatePage();
  }

  public getTour(): void {

    this.isError = false;
    this.isLoading = true;
    this.tourService.getTour(this.tourId)
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
  
  private translatePage():void {
    this.translate.get("TOURIST_SERVICES.TRAVELS_RIDES.DETAILS")
    .subscribe({
      next: (v) => {
        this.pageTitle = v.TITLE_TOUR;
        this.separatorText.push(
          { text: v.PRICES_SEPARATOR_TEXT }, 
          { text: v.ROUTE_SEPARATOR_TEXT },
          { text: v.PLACES_SEPARATOR_TEXT })
      }
    })
  }
}

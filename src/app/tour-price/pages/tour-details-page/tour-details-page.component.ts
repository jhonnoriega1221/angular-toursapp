import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from '../../services/tours.service';
import { RouteService } from '../../services/route.service';
import { Tours } from '../../models/tours';
import { Route } from '../../models/route';
import * as geojson from 'geojson';


import { TranslateService } from '@ngx-translate/core';
import { combineLatest, forkJoin, switchMap } from 'rxjs';

@Component({
  selector: 'app-tour-details-page',
  templateUrl: './tour-details-page.component.html',
  styleUrls: ['./tour-details-page.component.scss']
})
export class TourDetailsPageComponent implements OnInit {
  public pageTitle:string = '';
  public separatorText:any[] = [];
  private tourId: string = '';
  public isError: boolean = false;
  public isLoading: boolean = true;
  public tour: Tours = {
    _id: '',
    description: '',
    name: '',
    places: [],
    price: 0,
    type: '',
    imgURL:'',
    duration:{
      finish:0,
      start:0,
      time: ''
    },
    route_id: '',
  }

  public route:geojson.FeatureCollection = {
    features: [],
    type:'FeatureCollection'
  };


  constructor(private tourService: ToursService, private routeService:RouteService, private activatedRoute: ActivatedRoute, private translate:TranslateService) { }

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
    
    this.tourService.getTour(this.tourId).pipe(
      switchMap(res => (
        this.tour = res,
        this.routeService.getRoute(res.route_id)
      ))
    ).subscribe({
      next: (v) => this.route = v,
      error: (e) => {
        this.isError = true;
        this.isLoading = false;
        console.error(e);
      },
      complete: () => this.isLoading = false
    })

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

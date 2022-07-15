import { Component, OnInit } from '@angular/core';
import { Beach } from '../../models/beach';
import { BeachService } from '../../services/beach.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-beach-details-page',
  templateUrl: './beach-details-page.component.html',
  styleUrls: ['./beach-details-page.component.scss']
})
export class BeachDetailsPageComponent implements OnInit {

  public pageTitle:string = '';
  private beachId: number = 0;
  public isLoading: boolean = true;
  public isError: boolean = false;
  public beach:Beach = {
    distance: 0,
    hours: '',
    id: 0,
    imageUrl: '',
    location :{
      imgUrl: '',
      lat: 0,
      lng: 0,
      name: ''
    },
    name: '',
    services: {
      boatDish: 0,
      braids: 0,
      chairs: 0,
      jetsky: 0,
      massage:0,
      tent: 0,
      worm: 0
    }
  };
  public separatorTexts:any[] = [];



  constructor( private beachService:BeachService, private activatedRoute:ActivatedRoute, private translate:TranslateService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.beachId = params["id"];
      this.getBeach();
    });
    this.translatePage();
  }

  public getBeach():void {

      this.isError = false;
      this.isLoading = true;
      this.beachService.getBeach(this.beachId)
        .subscribe({
          next: (v) => this.beach = v,
          error: (e) => {
            this.isError = true;
            this.isLoading = false;
            console.error(e);
          },
          complete: () => this.isLoading = false
        });
    }

    private translatePage():void {
      this.translate.get("TOURIST_SERVICES.BEACH.DETAILS")
      .subscribe( {
        next: (v) => {
          this.pageTitle = v.TITLE;
          this.separatorTexts.push(
            { text: v.SCHEDULE_SEPARATOR_TEXT },
            { text: v.SERVICES.SEPARATOR_TEXT },
            { text: v.LOCATION_SEPARATOR_TEXT }
          ); 
        }
      })
    }
}

import { Component, OnInit } from '@angular/core';
import { MuseumService } from '../../services/museum.service';
import { ExhibitionService } from '../../services/exhibition.service';
import { ActivatedRoute } from '@angular/router';
import { Museum } from '../../models/museum';
import { Exhibition } from '../../models/exhibition';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-museum-details-page',
  templateUrl: './museum-details-page.component.html',
  styleUrls: ['./museum-details-page.component.scss']
})
export class MuseumDetailsPageComponent implements OnInit {

  public pageTitle:string = '';
  private museumId: string = '';
  public isLoading: boolean = true;
  public isError: boolean = false;

  public museum: Museum = {
    _id: '',
    name: '',
    imgURL: '',
    prices:[],
    description:'',
    location:{
      lat:0,
      lon:0
    },
    schedule: []
  }

  public separatorTitles:any[] = []

  public exhibitions:Exhibition[] = [];


  constructor(private translate:TranslateService, private museumService: MuseumService, private exhibitionService:ExhibitionService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.museumId = params['id'];
      this.getMuseumData();
    });
    this.translatePage();
  }

  public getMuseumData():void {
    this.getMuseum();
  }

  private getMuseum(): void {

    this.isError = false;
    this.isLoading = true;
    this.museumService.getMuseum(this.museumId)
      .subscribe({
        next: (v) => this.museum = v,
        error: (e) => {
          this.isError = true;
          this.isLoading = false;
          console.error(e);
        },
        complete: () => this.isLoading = false
      });
      
  }

  private translatePage(){
    this.translate.get("TOURIST_SERVICES.MUSEUM.DETAILS")
    .subscribe( {
      next: (v) => {
        this.pageTitle = v.TITLE;
        this.separatorTitles.push( {text: v.PRICES_SEPARATOR_TEXT}, {text: v.SCHEDULE_SEPARATOR_TEXT});
      }
    })
  }
}

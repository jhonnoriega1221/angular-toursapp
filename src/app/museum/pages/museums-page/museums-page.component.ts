import { Component, OnInit } from '@angular/core';
import { Museum } from '../../models/museum';
import { MuseumService } from '../../services/museum.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-museums-page',
  templateUrl: './museums-page.component.html',
  styleUrls: ['./museums-page.component.scss']
})
export class MuseumsPageComponent implements OnInit {

  public pageTitle:string = '';
  public museums: Museum[] = [];
  public isLoading:boolean = true;
  public isError:boolean = false;

  constructor(private museumService: MuseumService, private translate:TranslateService) {}



  ngOnInit(): void {
    this.getMuseums();
    this.translatePage();
  }

  public getMuseums(): void {
    this.isLoading = true;
    this.isError = false;
    this.museumService.getMuseums()
      .subscribe({
        next: (v) => this.museums = v,
        error: (e) => {
          console.log(e);
          this.isError = true;
          this.isLoading = false;
        },
        complete: () => this.isLoading = false
      });
  }

  private translatePage(){
    this.translate.get("TOURIST_SERVICES.MUSEUM.LIST")
    .subscribe( {
      next: (v) => {
        this.pageTitle = v.TITLE;

      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ExhibitionService } from '../../services/exhibition.service';
import { Exhibition } from '../../models/exhibition';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-museum-exhibitions-page',
  templateUrl: './museum-exhibitions-page.component.html',
  styleUrls: ['./museum-exhibitions-page.component.scss']
})
export class MuseumExhibitionsPageComponent implements OnInit {

  public pageTitle:string = '';
  private museumId: number = 0;
  public exhibitions: Exhibition[] = [];
  public isError: boolean = false;
  public isLoading: boolean = true;

  constructor( private translate:TranslateService, private exhibitionService: ExhibitionService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.museumId = params['id'];
      this.getExhibitions();
    });
    this.translatePage();
  }

  public getExhibitions(): void {
    this.isLoading = true;
    this.isError = false;
    this.exhibitionService.getMuseumExhibitions(this.museumId)
      .subscribe({
        next: (v) => this.exhibitions = v,
        error: (e) => {
          console.error(e);
          this.isError = true;
          this.isLoading = false;
        },
        complete: () => this.isLoading = false
      });
  }

  private translatePage(): void {
    this.translate.get("TOURIST_SERVICES.MUSEUM.EXHIBITIONS")
    .subscribe({
      next: (v) => {
        this.pageTitle = v.TITLE;
      }
    })
  }

}

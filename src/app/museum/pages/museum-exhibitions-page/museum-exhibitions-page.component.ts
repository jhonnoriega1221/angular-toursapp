import { Component, OnInit } from '@angular/core';
import { ExhibitionService } from '../../services/exhibition.service';
import { Exhibition } from '../../models/exhibition';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-museum-exhibitions-page',
  templateUrl: './museum-exhibitions-page.component.html',
  styleUrls: ['./museum-exhibitions-page.component.scss']
})
export class MuseumExhibitionsPageComponent implements OnInit {

  private museumId: number = 0;
  public exhibitions: Exhibition[] = [];
  public isError: boolean = false;
  public isLoading: boolean = true;

  constructor(private exhibitionService: ExhibitionService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.museumId = params['id'];
      this.getExhibitions();
    })
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

}

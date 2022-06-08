import { Component, OnInit } from '@angular/core';
import { Museum } from '../../models/museum';
import { MuseumService } from '../../services/museum.service';

@Component({
  selector: 'app-museums-page',
  templateUrl: './museums-page.component.html',
  styleUrls: ['./museums-page.component.scss']
})
export class MuseumsPageComponent implements OnInit {

  public museums: Museum[] = [];
  public isLoading:boolean = true;
  public isError:boolean = false;

  constructor(private museumService: MuseumService) {}



  ngOnInit(): void {
    this.getMuseums();
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

}

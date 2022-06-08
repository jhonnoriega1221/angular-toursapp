import { Component, OnInit } from '@angular/core';
import { MuseumService } from '../../services/museum.service';
import { ExhibitionService } from '../../services/exhibition.service';
import { ActivatedRoute } from '@angular/router';
import { Museum } from '../../models/museum';
import { Exhibition } from '../../models/exhibition';

@Component({
  selector: 'app-museum-details-page',
  templateUrl: './museum-details-page.component.html',
  styleUrls: ['./museum-details-page.component.scss']
})
export class MuseumDetailsPageComponent implements OnInit {

  private museumId: number = 0;
  public isLoading: boolean[] = [true,true];
  public isError: boolean[] = [false, false];
  public tempDate:string='Todos los días - 8:00am a 5:00pm';
  public loremDescription:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat quis neque venenatis ullamcorper. Nam ultrices sapien vitae felis imperdiet, non lacinia libero tempus. Sed lacus diam, egestas ac est vitae, vulputate efficitur massa. Maecenas ut sodales nunc. Integer volutpat lectus in sem sollicitudin rutrum nec vitae nulla.'

  public museum: Museum = {
    id: 0,
    name: '',
    imageUrl: '',
    location: '',
    distance: 0,
    rating: 0,
    exhibitions: 0,
    adult_price:'',
    child_price:'',
    schedule:''
  }

  public exhibitions:Exhibition[] = [];


  constructor(private museumService: MuseumService, private exhibitionService:ExhibitionService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.museumId = params['id'];
      this.getMuseumData();
    })
  }

  public getMuseumData():void {
    this.getMuseum();
    this.getExhibitions();
  }

  private getMuseum(): void {

    this.isError[0] = false;
    this.isLoading[0] = true;
    this.museumService.getMuseum(this.museumId)
      .subscribe({
        next: (v) => this.museum = v,
        error: (e) => {
          this.isError[0] = true;
          this.isLoading[0] = false;
          console.error(e);
        },
        complete: () => this.isLoading[0] = false
      });
      
  }

  private getExhibitions(): void{
    this.isError[1] = false;
    this.isLoading[1] = true;
    this.exhibitionService.getMuseumExhibitions(this.museumId)
    .subscribe({
      next: (v) => {
        this.exhibitions = v.slice(0,3).map(exhibition => {
          return exhibition
        });
      },
      error: (e) => {
        this.isError[1] = true;
        this.isLoading[1] = false;
        console.log(e);
      },
      complete: () => this.isLoading[1] = false
    });

    

  }

}

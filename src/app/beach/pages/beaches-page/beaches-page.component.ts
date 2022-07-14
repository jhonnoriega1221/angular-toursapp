import { Component, OnInit } from '@angular/core';
import { BeachService } from '../../services/beach.service';
import { Beach } from '../../models/beach';

@Component({
  selector: 'app-beaches-page',
  templateUrl: './beaches-page.component.html',
  styleUrls: ['./beaches-page.component.scss']
})
export class BeachesPageComponent implements OnInit {

  public beaches: Beach[] = [];
  public isLoading:boolean = true;
  public isError:boolean = false;

  constructor(private beachService: BeachService) {}



  ngOnInit(): void {
    this.getBeaches();
  }

  public getBeaches(): void {
    this.isLoading = true;
    this.isError = false;
    this.beachService.getBeaches()
      .subscribe({
        next: (v) => this.beaches = v,
        error: (e) => {
          console.log(e);
          this.isError = true;
          this.isLoading = false;
        },
        complete: () => this.isLoading = false
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { BeachService } from '../../services/beach.service';
import { Beach } from '../../models/beach';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-beaches-page',
  templateUrl: './beaches-page.component.html',
  styleUrls: ['./beaches-page.component.scss']
})
export class BeachesPageComponent implements OnInit {

  public pageTitle:string = '';
  public beaches: Beach[] = [];
  public isLoading:boolean = true;
  public isError:boolean = false;

  constructor(private beachService: BeachService, private translate:TranslateService) {}



  ngOnInit(): void {
    this.getBeaches();
    this.translatePage();
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

  private translatePage():void {
    this.translate.get("TOURIST_SERVICES.BEACH.LIST")
    .subscribe( {
      next: (v) => { this.pageTitle = v.TITLE }
    })
  }

}

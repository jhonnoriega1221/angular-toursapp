import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { FoodService } from '../../services/food.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-foods-page',
  templateUrl: './foods-page.component.html',
  styleUrls: ['./foods-page.component.scss']
})
export class FoodsPageComponent implements OnInit {

  public foods:Food[] = [];
  public isLoading:boolean = true;
  public isError:boolean = false;
  public pageTitle:string = '';

  constructor( private foodService:FoodService, private translate:TranslateService) { }

  ngOnInit(): void {
    this.getFoods();
    this.translatePage();
  }

  public getFoods(): void {
    this.isLoading = true;
    this.isError = false;
    this.foodService.getFoods()
      .subscribe({
        next: (v) => this.foods = v,
        error: (e) => {
          console.log(e);
          this.isError = true;
          this.isLoading = false;
        },
        complete: () => this.isLoading = false
      });
  }

  private translatePage():void {
    this.translate.get("TOURIST_SERVICES.FOOD.LIST")
    .subscribe({
      next: (v) => {
        this.pageTitle = v.TITLE;
      }
    })
  }

}

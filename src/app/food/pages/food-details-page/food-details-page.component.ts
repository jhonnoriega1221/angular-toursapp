import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../models/food';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-food-details-page',
  templateUrl: './food-details-page.component.html',
  styleUrls: ['./food-details-page.component.scss']
})
export class FoodDetailsPageComponent implements OnInit {

  public pageTitle:string = '';
  private foodId: string = '';
  public isLoading: boolean = true;
  public isError: boolean = false;

  public food: Food = {
    _id: '',
    name: '',
    imgURL: '',
    prices:[]
  }

  public separatorTitles:any[] = []

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute, private translate:TranslateService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.foodId = params['id'];
      this.getFood();
    });
    this.translatePage();
  }

  public getFood(): void {

    this.isError = false;
    this.isLoading = true;
    this.foodService.getFood(this.foodId)
      .subscribe({
        next: (v) => {this.food = v;},
        error: (e) => {
          this.isError = true;
          this.isLoading = false;
          console.error(e);
        },
        complete: () => this.isLoading = false
      });
      
  }

  private translatePage():void{
    this.translate.get("TOURIST_SERVICES.FOOD.DETAILS")
    .subscribe( {
      next: (v) => {
        this.pageTitle = v.TITLE;
        this.separatorTitles.push( {text: v.PRICES_SEPARATOR_TEXT});
      }
    })
  }

}

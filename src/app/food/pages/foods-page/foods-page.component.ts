import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-foods-page',
  templateUrl: './foods-page.component.html',
  styleUrls: ['./foods-page.component.scss']
})
export class FoodsPageComponent implements OnInit {

  public foods:Food[] = [];
  public isLoading:boolean = true;
  public isError:boolean = false;

  constructor( private foodService:FoodService) { }

  ngOnInit(): void {
    this.getFoods();
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

}

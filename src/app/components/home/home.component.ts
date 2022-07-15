import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/services/food.service';
import { Food } from 'src/app/shared/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];
  constructor(private foodService:FoodService) {

   }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

}

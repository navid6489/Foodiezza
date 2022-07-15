import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IFood } from 'src/app/shared/IFood';
import { FoodDetailsService } from 'src/services/food-details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})
export class AddFoodItemComponent implements OnInit {
  foodName:FormControl = new FormControl("");
  price:FormControl = new FormControl("");
  rating:FormControl = new FormControl("");
  category:FormControl = new FormControl("");
  cookTime:FormControl = new FormControl("");
  imageUrl:FormControl = new FormControl("");
  foodQuantity:FormControl = new FormControl("");
  constructor(private foodDetailsService:FoodDetailsService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  save(){
    let food:IFood = {
      foodName:this.foodName.value,
      price:parseInt(this.price.value),
      rating:parseInt(this.rating.value),
      category:this.category.value,
      cookTime:this.cookTime.value,
      imageUrl:this.imageUrl.value,
      foodQuantity:parseInt(this.foodQuantity.value)
    };
    this.foodDetailsService.addFood(food);
    this.toastr.success(`${food.foodName}`,'Food Item added Successfully!');


  }
}

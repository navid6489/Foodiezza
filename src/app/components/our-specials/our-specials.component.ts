import { Component, OnInit } from '@angular/core';
import { IFood } from 'src/app/shared/IFood';
import { BehaviorSubject, Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { WishlistCartService } from 'src/services/wishlist-cart.service';
import { FoodDetailsService } from 'src/services/food-details.service';
@Inject(FoodDetailsService)
@Component({
  selector: 'app-our-specials',
  templateUrl: './our-specials.component.html',
  styleUrls: ['./our-specials.component.css']
})
export class OurSpecialsComponent implements OnInit {
searchKey:string='';
filterKey:string='foodName';
public p!:number;
specialsResult:IFood[]=[];
public filterCategory:boolean=false; 
constructor(private foodDetailsService:FoodDetailsService , private cartService:CartService, private wishlistCartService:WishlistCartService ) { }
  ngOnInit(): void {  
    this.foodDetailsService.getFood().subscribe((data)=>{            
         for(var i=0;i<data.length;i++){
          let item:IFood={
            foodId:data[i].foodId,
            foodName:data[i].foodName,
            price:data[i].price,
            rating:data[i].rating,
            category:data[i].category,
            cookTime:data[i].cookTime,
            imageUrl:data[i].imageUrl,
            foodQuantity:data[i].foodQuantity
        };
          this.specialsResult.push(item);    
          this.searchKey='';
          this.filterKey='category';     
    }
  });

this.cartService.search.subscribe((val:string)=>{
   this.searchKey=val;
  this.filterKey='foodName';
 })
 this.cartService.category.subscribe((val:string)=>{
  this.searchKey=val;
  this.filterKey='category';
 })
}
  addtocart(item:IFood){
    this.cartService.addToCart(item);
  }

  updateBool(food:IFood){
    food.addedToWishList=!food.addedToWishList;   
    this.wishlistCartService.addToWishlistCart(food);   
    this.foodDetailsService.updateBoolean(food);
  }
}


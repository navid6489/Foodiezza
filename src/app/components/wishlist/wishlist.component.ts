import { Component, OnInit } from '@angular/core';
import { IFood } from 'src/app/shared/IFood';
import { CartService } from 'src/services/cart.service';
import { FoodDetailsService } from 'src/services/food-details.service';
import { WishlistCartService } from 'src/services/wishlist-cart.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
   wishlistArray:IFood[]=[]; 

  constructor(private wishlistCartService : WishlistCartService , private cartService:CartService, private foodDetailsService:FoodDetailsService) { }

  ngOnInit(): void {
    this.wishlistCartService.getProducts().subscribe((wishListData:IFood[]) =>{
      console.log(wishListData);
      this.wishlistArray = wishListData;
 });    
}
addToCart(dt:IFood){
       this.cartService.addToCart(dt);
  }
addToWishlistCart(dt:IFood){
    this.wishlistCartService.addToWishlistCart(dt);
  }
removeCart(dt:IFood){
  this.wishlistCartService.removeWishlistCartItem(dt)
}
updateBool(food:IFood){  
  food.addedToWishList=!food.addedToWishList;
  this.foodDetailsService.updateBoolean(food);
 }
}

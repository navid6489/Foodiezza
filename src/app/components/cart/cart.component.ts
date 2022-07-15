import { Component, OnInit } from '@angular/core';
import { IFood } from 'src/app/shared/IFood';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public foodList : IFood[] = [];
  public grandTotal ! : number ;
  public foodItem:any ;
  public foodQuantity !:number;
  public foodTotal !:number;    
  public p!:number;

  constructor(private cartService:CartService) { }
  ngOnInit(): void {
    this.cartService.getFood().subscribe(res=>{
      this.foodList = res;
      this.grandTotal=this.cartService.getTotalPrice();
      console.log("total is"+ this.grandTotal);
    })
  }
  removeItem(item:IFood){    
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
   increaseQuantity(item:IFood,foodQuantity:number){
    for(let i=0;i<this.foodList.length;i++)
    {
      if(this.foodList[i].foodId === item.foodId){
      this.foodList[i].foodQuantity =foodQuantity+1             
    }
      
     }  
     this.grandTotal=this.cartService.getTotalPrice();    
    }
    decreaseQuantity(item:IFood,foodQuantity:number){
      for(let i=0;i<this.foodList.length;i++)
      {
        if(this.foodList[i].foodId === item.foodId ){
          if(foodQuantity !=1)
             this.foodList[i].foodQuantity = foodQuantity-1 
      }
     }  
      this.grandTotal=this.cartService.getTotalPrice();  
    } 
}

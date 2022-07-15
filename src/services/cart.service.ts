import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { IFood } from 'src/app/shared/IFood';

 @Injectable({
   providedIn: 'root'
 })
 export class CartService {
   public cartItemList:IFood[]=[];   
   public foodList=new BehaviorSubject<any>([]);
   public search=new BehaviorSubject<string>("");
   public category=new BehaviorSubject<any>("");   
   public filterCategory: any;
   constructor(private toastr:ToastrService) { }
   getFood(){
    return this.foodList.asObservable();
   }
     setFood(product:any){
     this.cartItemList.push(...product);
     this.foodList.next(product);
   }
   addToCart(food:any)
   {
    const itemIndex = this.cartItemList.findIndex(item => item.foodId === food.foodId);
    if (itemIndex === -1) {
    this.cartItemList.push(food);   
    this.toastr.success(`${food.foodName}`,' added to Bag');   
    }
    else {
         this.cartItemList[itemIndex].foodQuantity = this.cartItemList[itemIndex].foodQuantity + food.foodQuantity;
    }
    this.foodList.next(this.cartItemList.slice(0));
    this.getTotalPrice();
   }
    getTotalPrice():number {
     let grandTotal=0;
     this.cartItemList.map((a:any) =>{
      grandTotal += Number(a.price * a.foodQuantity)})  
      console.log(grandTotal);
      return grandTotal;
 }
   removeCartItem(product:IFood){     
     this.cartItemList.map((a:any,index:any)=>{
       if(product.foodId==a.foodId){
       this.cartItemList.splice(index,1)
    }
     })
     this.foodList.next(this.cartItemList);
   }
  removeAllCart(){
    this.cartItemList=[];
    this.foodList.next(this.cartItemList);
   }
  
  }

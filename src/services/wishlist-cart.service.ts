import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { IFood } from 'src/app/shared/IFood';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistCartService {
  public wishlistCartItemList:IFood[]=[]
  public productList=new BehaviorSubject<any>([]);
  public search =new BehaviorSubject<string>("");
  http: any;


constructor(private toastr:ToastrService , private cartService:CartService) { }

  getProducts(){
    return this.productList.asObservable();
  }
  setProducts(product :any){
    this.wishlistCartItemList.push(...product);
    this.productList.next(product);
  }
  addToWishlistCart(product:any){
    const itemIndex = this.wishlistCartItemList.findIndex(item => item.foodId === product.foodId);
 
    if (itemIndex === -1) {
    this.wishlistCartItemList.push(product);
    }
    else{
         this.toastr.warning( 'Removed From wishlist' , `${product.foodName}`,{
         timeOut:2500         
      });
    
    }
    this.productList.next(this.wishlistCartItemList.slice(0));  
  }

  removeWishlistCartItem(food: IFood){
      for(let i=0;i<this.wishlistCartItemList.length;i++){
      if(this.wishlistCartItemList[i].foodId === food.foodId)
      {
          this.wishlistCartItemList.splice(i,1);
      }
    }
    // this.toastr.error('item removed successfully!',`${product.title} Removed!`)
    this.productList.next(this.wishlistCartItemList);

    // localStorage.setItem('wishlistcart',JSON.stringify(this.wishlistCartItemList))
  }
  // removeAllCart(){
  //   this.wishlistCartItemList=[]
  //   this.productList.next(this.wishlistCartItemList);
  // }

}

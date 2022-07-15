import { Component, OnInit } from '@angular/core';
import { IFood } from 'src/app/shared/IFood';
import { FoodDetailsService } from 'src/services/food-details.service';
import { IBillingDetails } from 'src/app/shared/ibilling-details';
import { OrderDetailsService } from 'src/services/order-details.service';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
bill:IBillingDetails[]=[];
public food:IFood[]=[];
public grandTotal!:number;
dateObj= Date.now()
  constructor(private orderDetailsService:OrderDetailsService, private cartService:CartService) { }

  ngOnInit(): void {
    this.orderDetailsService.getBillingDetails().subscribe((data:IBillingDetails[])=>{
      console.log(data)
      this.bill=data;
      console.log(this.bill)
    })
    this.cartService.getFood()
    .subscribe(res=>{
      this.food=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
}
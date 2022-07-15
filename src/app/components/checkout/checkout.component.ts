import { APP_BOOTSTRAP_LISTENER, HostListener } from '@angular/core';
import { Component, EventEmitter, Input , OnInit , Output , Inject} from '@angular/core';
import { IFood } from 'src/app/shared/IFood';
import { CartService } from 'src/services/cart.service';
import { FormControl } from '@angular/forms';
import { IBillingDetails } from 'src/app/shared/ibilling-details';
import {CheckoutService } from 'src/services/checkout.service';
import { ToastrService } from 'ngx-toastr';

declare var Razorpay:any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public foodList : IFood[] = [];
  public grandTotal ! : number ;  
  Name:FormControl = new FormControl("");
  Email:FormControl=new FormControl("");
  Address:FormControl = new FormControl("");
  City:FormControl = new FormControl("");
  State:FormControl = new FormControl("");
  zipCode:FormControl = new FormControl("");
  phoneNumber:FormControl = new FormControl(""); 
  
  constructor(private cartService:CartService , private checkoutService : CheckoutService,private toastr:ToastrService) {     
  }
  ngOnInit(): void {
    this.cartService.getFood().subscribe(res=>{
      this.foodList = res;
      this.grandTotal=this.cartService.getTotalPrice();
     })
  }  
  saveBillingDetails(){
    let iBillingDetails: IBillingDetails={
        Name:this.Name.value,
        Address:this.Address.value,
        Email:this.Email.value,
        City:this.City.value,
        State:this.State.value, 
        zipCode:this.zipCode.value,
        phoneNumber:this.phoneNumber.value,
        subTotal:this.grandTotal=this.cartService.getTotalPrice()       
    };
    this.checkoutService.AddBillingDetails(iBillingDetails);
    this.toastr.success('Address saved Successfully !');
  }  
message:any;
paymentId = "";
error = "";
title1 = 'razorpay-intergration';
options = {
  "key": "rzp_test_KMuAYKn5Hl8vDL",
  "amount":this.grandTotal,
  "name": "Madhuri Ahuja",
  "description": "Payment Details",
  "image": "/assets/images/fav.png",
  "order_id": "",
  "handler": function (response: any) {
    var event = new CustomEvent("payment.success",
      {
        detail: response,
        bubbles: true,
        cancelable: true
      }
    );
    window.dispatchEvent(event);
  },
  "prefill": {
    "name": "",
    "email": "",
    "contact": ""
  },
  "notes": {
    "address": ""
  },
  "theme": {
    "color": "#45426c"
  }
};
paynow() {
  this.paymentId = '';
  this.error = '';
  this.options.amount=this.grandTotal*100;
  this.options.prefill.name = "Madhu";
  this.options.prefill.email = "ahujamadhu01@gmail.com";
  this.options.prefill.contact = "7038080532";
  var rzp1 = new Razorpay(this.options);
  rzp1.open();
  rzp1.on('payment.failed', function (response: any) {
    console.log(response.error.code);
    console.log(response.error.description);
    console.log(response.error.source);
    console.log(response.error.step);
    console.log(response.error.reason);
    console.log(response.error.metadata.order_id);
    console.log(response.error.metadata.payment_id);
  });
}
@HostListener('window:payment.success', ['$event'])
onPaymentSuccess(event: any): void {
  this.message = "Success Payment";
}
submit(post:any){
  console.log("submitted form successfully!")
}
}
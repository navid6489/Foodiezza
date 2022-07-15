import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IOrder } from 'src/app/shared/iorder';
import { IBillingDetails } from 'src/app/shared/ibilling-details';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private httpClient : HttpClient) { }
  AddBillingDetails(iBillingDetails : IBillingDetails){
    this.httpClient.post<IBillingDetails>("https://localhost:5001/api/billingdetails",iBillingDetails, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => console.log("Data entered in Database Successfully !"));
  }
}

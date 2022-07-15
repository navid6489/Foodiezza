import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBillingDetails } from 'src/app/shared/ibilling-details';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  url="https://localhost:5001/api/orderdetails"
  constructor(private http:HttpClient) { }
  getBillingDetails():Observable<IBillingDetails[]>{
    return this.http.get<IBillingDetails[]>(this.url+'/BillingDetails');
  }
  addProduct(val:IBillingDetails){
    this.http.post<IBillingDetails>(this.url+'/BillingDetails',val, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }

    }).subscribe(result => console.log("BilingDetails entered in Database Successfully !"));
  }
}

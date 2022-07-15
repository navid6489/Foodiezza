import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import{IFood} from '../app/shared/IFood';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class FoodDetailsService {
  errorMessage: any;
  constructor(private httpClient :HttpClient) { }
  private handleError(error: HttpErrorResponse) 
  {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  //getFood method to get all data from database
  getFood():Observable<IFood[]>{
    let url="https://localhost:5001/api/foodinfo";
    console.log("in service");
    return this.httpClient.get<IFood[]>(url);    
  }
  //addFood method to post the data from front-end to backend
  addFood(food : IFood){
    this.httpClient.post<IFood>("https://localhost:5001/api/foodinfo",food, {
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => console.log("Data entered in Database Successfully !"));
  }
  //deleteFood method to delete the data with specified id
  deleteFood(id:number)
  {
    this.httpClient.delete("https://localhost:5001/api/foodinfo/"+id,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result=>console.log("Food Item deleted Successfully"));
  }
  //updateBoolean method to put the data in the database
  updateBoolean(food:IFood)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        "Access-Control-Allow-Origin":"*"
      })
  };
  return this.httpClient.put("https://localhost:5001/api/foodinfo/"+food.foodId, food, httpOptions)
  .subscribe({
        next: data => {
          console.log('success!', data);
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    });
  }
}

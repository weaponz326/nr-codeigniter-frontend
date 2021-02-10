import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/restaurant/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentsApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all payments belonging to user

  public getPayments(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-payments/payment-list?user=" + sessionStorage.getItem('restaurant_id'));
  }

  public postPayment(payment): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-payments/payment/", payment);
  }

  // retreive, update and delete payment

  public getSinglePayment(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'));
  }

  public putPayment(payment): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'), payment);
  }

  public deletePayment(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'));
  }

  // get bills for selection window

  public getBills(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-payments/bill-list?user=" + sessionStorage.getItem('restaurant_id'));
  }

}

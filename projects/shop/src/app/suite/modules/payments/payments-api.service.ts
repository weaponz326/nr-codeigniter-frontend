import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentsApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all payments belonging to user

  public getPayments(): Observable<any>{
    return this.http.get(this.shopUrl + "module-payments/payment-list?user=" + sessionStorage.getItem('shop_id'));
  }

  public postPayment(payment): Observable<any>{
    return this.http.post(this.shopUrl + "module-payments/payment/", payment);
  }

  // retreive, update and delete payment

  public getSinglePayment(): Observable<any>{
    return this.http.get(this.shopUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'));
  }

  public putPayment(payment): Observable<any>{
    return this.http.put(this.shopUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'), payment);
  }

  public deletePayment(): Observable<any>{
    return this.http.delete(this.shopUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'));
  }

}

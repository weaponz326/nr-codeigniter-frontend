import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hotel/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentsApiService {

  constructor(private http: HttpClient) { }

  hotelUrl = environment.hotelUrl;

  // create and get all payments belonging to account

  public getPayments(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-payments/payment?account=" + sessionStorage.getItem('hotel_id'));
  }

  public postPayment(payment): Observable<any>{
    return this.http.post(this.hotelUrl + "module-payments/payment/", payment);
  }

  // retreive, update and delete payment

  public getSinglePayment(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'));
  }

  public putPayment(payment): Observable<any>{
    return this.http.put(this.hotelUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'), payment);
  }

  public deletePayment(): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'));
  }

  // get bills for selection window

  public getBills(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-payments/bill?account=" + sessionStorage.getItem('hotel_id'));
  }

}

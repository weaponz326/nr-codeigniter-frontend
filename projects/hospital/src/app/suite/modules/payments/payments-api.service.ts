import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentsApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all payments belonging to user

  public getPayments(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-payments/payment?account=" + sessionStorage.getItem('hospital_id'));
  }

  public postPayment(payment): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-payments/payment/", payment);
  }

  // retreive, update and delete payment

  public getSinglePayment(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'));
  }

  public putPayment(payment): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'), payment);
  }

  public deletePayment(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'));
  }

  // payments history
  public getPaymentsHistory(billId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-payments/payments-history?bill=" + billId);
  }

  // --------------------------------------------------------------------------------------------------------------------------------

  // get patients and doctors for selection window

  public getAdmissions(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-admissions/admission?account=" + sessionStorage.getItem('hospital_id'));
  }

  public getBills(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-bills/bill?account=" + sessionStorage.getItem('hospital_id'));
  }

}

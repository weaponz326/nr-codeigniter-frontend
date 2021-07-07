import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentsApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all payments belonging to account

  public getPayments(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-payments/payment?account=" + sessionStorage.getItem('school_id'));
  }

  public postPayment(payment): Observable<any>{
    return this.http.post(this.schoolUrl + "module-payments/payment/", payment);
  }

  // retreive, update and delete payment

  public getSinglePayment(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'));
  }

  public putPayment(payment): Observable<any>{
    return this.http.put(this.schoolUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'), payment);
  }

  public deletePayment(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-payments/payment/" + sessionStorage.getItem('payment_id'));
  }

  // get students and student bills for selection window

  public getStudents(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-students/student?account=" + sessionStorage.getItem('school_id'));
  }

  public getBills(studentId): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/student-bill?student=" + studentId);
  }

}

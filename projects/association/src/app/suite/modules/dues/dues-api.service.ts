import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/association/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DuesApiService {

  constructor(private http: HttpClient) { }

  associationUrl = environment.associationUrl;

  // create and get all dues belonging to account

  public getDues(): Observable<any>{
    return this.http.get(this.associationUrl + "module-dues/dues?account=" + sessionStorage.getItem('association_id'));
  }

  public postDues(dues): Observable<any>{
    return this.http.post(this.associationUrl + "module-dues/dues/", dues);
  }

  // retreive, update and delete dues

  public getSingleDues(): Observable<any>{
    return this.http.get(this.associationUrl + "module-dues/dues/" + sessionStorage.getItem('dues_id'));
  }

  public putDues(dues): Observable<any>{
    return this.http.put(this.associationUrl + "module-dues/dues/" + sessionStorage.getItem('dues_id'), dues);
  }

  public deleteDues(): Observable<any>{
    return this.http.delete(this.associationUrl + "module-dues/dues/" + sessionStorage.getItem('dues_id'));
  }

  // ---------------------------------------------------------------------------------------------------------------------
  // dues payments

  public getDuesPayments(): Observable<any>{
    return this.http.get(this.associationUrl + "module-dues/dues-payment?dues=" + sessionStorage.getItem('dues_id'));
  }

  public postDuesPayment(payment): Observable<any>{
    return this.http.post(this.associationUrl + "module-dues/committe-epayment/", payment);
  }

  // retreive, update and delete dues

  public putDuesPayment(paymentId, paymentData): Observable<any>{
    return this.http.put(this.associationUrl + "module-dues/dues-payment/" + paymentId, paymentData);
  }

  public deleteDuesPayment(paymentId): Observable<any>{
    return this.http.delete(this.associationUrl + "module-dues/dues-payment/" + paymentId);
  }

}

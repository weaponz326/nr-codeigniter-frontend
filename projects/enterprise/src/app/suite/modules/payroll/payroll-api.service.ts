import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PayrollApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all payroll belonging to account

  public getPayroll(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-payroll/payroll?account=" + sessionStorage.getItem('enterprise_id'));
  }

  public postPayroll(payroll): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-payroll/payroll/", payroll);
  }

  // retreive, update and delete payroll

  public getSinglePayroll(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-payroll/payroll/" + sessionStorage.getItem('payroll_id'));
  }

  public putPayroll(payroll): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-payroll/payroll/" + sessionStorage.getItem('payroll_id'), payroll);
  }

  public deletePayroll(): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-payroll/payroll/" + sessionStorage.getItem('payroll_id'));
  }

}

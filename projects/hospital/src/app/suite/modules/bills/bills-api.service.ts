import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BillsApiService {

  hospitalUrl = environment.hospitalUrl;

  constructor(private http: HttpClient) { }

  // create and get all bills belonging to user

  public getBills(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-bills/bill-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public postBill(bill): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-bills/bill/", bill);
  }

  // retreive, update and delete bill

  public getSingleBill(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-bills/bill/" + sessionStorage.getItem('bill_id'));
  }

  public putBill(bill): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-bills/bill/" + sessionStorage.getItem('bill_id'), bill);
  }

  public deleteBill(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-bills/bill/" + sessionStorage.getItem('bill_id'));
  }

  // get patients and admissions for selection window

  public getPatients(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-bills/patient-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public getAdmissions(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-bills/admission-list?user=" + sessionStorage.getItem('hospital_id'));
  }

}

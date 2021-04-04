import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReceptionApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all visitors belonging to user

  public getVisitors(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-visitors/visitor-list?user=" + sessionStorage.getItem('enterprise_id'));
  }

  public postVisitor(visitor): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-visitors/visitor/", visitor);
  }

  // retreive, update and delete visitor

  public getSingleVisitor(appoitmentId): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-visitors/visitor/" + appoitmentId);
  }

  public putVisitor(visitor, appoitmentId): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-visitors/visitor/" + appoitmentId, visitor);
  }

  public deleteVisitor(appoitmentId): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-visitors/visitor/" + appoitmentId);
  }

  // get patients and doctors for selection window

  public getPatients(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-visitors/patient-list?user=" + sessionStorage.getItem('enterprise_id'));
  }

  public getDoctors(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-visitors/doctor-list?user=" + sessionStorage.getItem('enterprise_id'));
  }

}

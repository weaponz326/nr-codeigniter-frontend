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

  // create and get all visitors belonging to account

  public getVisitors(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-reception/visitor?account=" + sessionStorage.getItem('enterprise_id'));
  }

  public postVisitor(visitor): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-reception/visitor/", visitor);
  }

  // retreive, update and delete visitor

  public getSingleVisitor(appoitmentId): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-reception/visitor/" + appoitmentId);
  }

  public putVisitor(visitor, appoitmentId): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-reception/visitor/" + appoitmentId, visitor);
  }

  public deleteVisitor(appoitmentId): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-reception/visitor/" + appoitmentId);
  }

}

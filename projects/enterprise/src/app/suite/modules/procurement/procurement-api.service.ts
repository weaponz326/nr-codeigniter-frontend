import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProcurementApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all procurement belonging to user

  public getProcurement(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-procurement/procurement-list?user=" + sessionStorage.getItem('enterprise_id'));
  }

  public postProcurement(procurement): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-procurement/procurement/", procurement);
  }

  // retreive, update and delete order

  public getSingleProcurement(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-procurement/procurement/" + sessionStorage.getItem('procurement_id'));
  }

  public putProcurement(procurement): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-procurement/procurement/" + sessionStorage.getItem('procurement_id'), procurement);
  }

  public deleteProcurement(): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-procurement/procurement/" + sessionStorage.getItem('procurement_id'));
  }

}

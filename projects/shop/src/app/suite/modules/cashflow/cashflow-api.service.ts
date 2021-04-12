import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CashflowApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all sheets belonging to user

  public getAllSheets(): Observable<any>{
    return this.http.get(this.shopUrl + "module-cashflow/sheet-list?user=" + sessionStorage.getItem('shop_id'));
  }

  public postSheet(sheet): Observable<any>{
    return this.http.post(this.shopUrl + "module-cashflow/sheet/", sheet);
  }

  // retreive, update and delete sheet

  public getSingleSheet(): Observable<any>{
    return this.http.get(this.shopUrl + "module-cashflow/sheet/" + sessionStorage.getItem('sheet_id'));
  }

  public putSheet(sheet): Observable<any>{
    return this.http.put(this.shopUrl + "module-cashflow/sheet/" + sessionStorage.getItem('sheet_id'), sheet);
  }

  public deleteSheet(): Observable<any>{
    return this.http.delete(this.shopUrl + "module-cashflow/sheet/" + sessionStorage.getItem('sheet_id'));
  }

}

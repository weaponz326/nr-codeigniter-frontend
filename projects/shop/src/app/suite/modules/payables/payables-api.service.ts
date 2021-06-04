import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PayablesApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all payables belonging to account

  public getPayables(): Observable<any>{
    return this.http.get(this.shopUrl + "module-payables/payable?account=" + sessionStorage.getItem('shop_id'));
  }

  public postPayable(payable): Observable<any>{
    return this.http.post(this.shopUrl + "module-payables/payable/", payable);
  }

  // retreive, update and delete payable

  public getSinglePayable(payableId): Observable<any>{
    return this.http.get(this.shopUrl + "module-payables/payable/" + payableId);
  }

  public putPayable(payable, payableId): Observable<any>{
    return this.http.put(this.shopUrl + "module-payables/payable/" + payableId, payable);
  }

  public deletePayable(payableId): Observable<any>{
    return this.http.delete(this.shopUrl + "module-payables/payable/" + payableId);
  }

}

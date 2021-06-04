import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReceivablesApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all receivables belonging to account

  public getReceivables(): Observable<any>{
    return this.http.get(this.shopUrl + "module-receivables/receivable?account=" + sessionStorage.getItem('shop_id'));
  }

  public postReceivable(receivable): Observable<any>{
    return this.http.post(this.shopUrl + "module-receivables/receivable/", receivable);
  }

  // retreive, update and delete receivable

  public getSingleReceivable(receivableId): Observable<any>{
    return this.http.get(this.shopUrl + "module-receivables/receivable/" + receivableId);
  }

  public putReceivable(receivable, receivableId): Observable<any>{
    return this.http.put(this.shopUrl + "module-receivables/receivable/" + receivableId, receivable);
  }

  public deleteReceivable(receivableId): Observable<any>{
    return this.http.delete(this.shopUrl + "module-receivables/receivable/" + receivableId);
  }

}

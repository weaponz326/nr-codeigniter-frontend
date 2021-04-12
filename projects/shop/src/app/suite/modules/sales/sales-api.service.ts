import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SalesApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all sales belonging to user

  public getAllSales(): Observable<any>{
    return this.http.get(this.shopUrl + "module-sales/sales-list?user=" + sessionStorage.getItem('shop_id'));
  }

  public postSales(sales): Observable<any>{
    return this.http.post(this.shopUrl + "module-sales/sales/", sales);
  }

  // retreive, update and delete sales

  public getSingleSales(salesId): Observable<any>{
    return this.http.get(this.shopUrl + "module-sales/sales/" + salesId);
  }

  public putSales(sales, salesId): Observable<any>{
    return this.http.put(this.shopUrl + "module-sales/sales/" + salesId, sales);
  }

  public deleteSales(salesId): Observable<any>{
    return this.http.delete(this.shopUrl + "module-sales/sales/" + salesId);
  }

}

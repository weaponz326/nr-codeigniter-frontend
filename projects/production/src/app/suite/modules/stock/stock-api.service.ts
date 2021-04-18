import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/production/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StockApiService {

  constructor(private http: HttpClient) { }

  productionUrl = environment.productionUrl;

  // create and get all stock belonging to user

  public getAllStock(): Observable<any>{
    return this.http.get(this.productionUrl + "module-stock/stock-list?user=" + sessionStorage.getItem('production_id'));
  }

  public postStock(stock): Observable<any>{
    return this.http.post(this.productionUrl + "module-stock/stock/", stock);
  }

  // retreive, update and delete stock

  public getSingleStock(stockId): Observable<any>{
    return this.http.get(this.productionUrl + "module-stock/stock/" + stockId);
  }

  public putStock(stock, stockId): Observable<any>{
    return this.http.put(this.productionUrl + "module-stock/stock/" + stockId, stock);
  }

  public deleteStock(stockId): Observable<any>{
    return this.http.delete(this.productionUrl + "module-stock/stock/" + stockId);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/production/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrdersApiService {

  constructor(private http: HttpClient) { }

  productionUrl = environment.productionUrl;

  // create and get all order belonging to user

  public getAllOrders(): Observable<any>{
    return this.http.get(this.productionUrl + "module-orders/order-list?user=" + sessionStorage.getItem('production_id'));
  }

  public postOrder(order): Observable<any>{
    return this.http.post(this.productionUrl + "module-orders/order/", order);
  }

  // retreive, update and delete order

  public getSingleOrder(orderId): Observable<any>{
    return this.http.get(this.productionUrl + "module-orders/order/" + orderId);
  }

  public putOrder(order, orderId): Observable<any>{
    return this.http.put(this.productionUrl + "module-orders/order/" + orderId, order);
  }

  public deleteOrder(orderId): Observable<any>{
    return this.http.delete(this.productionUrl + "module-orders/order/" + orderId);
  }

}

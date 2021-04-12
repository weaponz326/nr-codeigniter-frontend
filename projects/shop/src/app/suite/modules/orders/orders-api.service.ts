import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrdersApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all orders belonging to user

  public getOrders(): Observable<any>{
    return this.http.get(this.shopUrl + "module-orders/order-list?user=" + sessionStorage.getItem('shop_id'));
  }

  public postOrder(order): Observable<any>{
    return this.http.post(this.shopUrl + "module-orders/order/", order);
  }

  // retreive, update and delete order

  public getSingleOrder(): Observable<any>{
    return this.http.get(this.shopUrl + "module-orders/order/" + sessionStorage.getItem('order_id'));
  }

  public putOrder(order): Observable<any>{
    return this.http.put(this.shopUrl + "module-orders/order/" + sessionStorage.getItem('order_id'), order);
  }

  public deleteOrder(): Observable<any>{
    return this.http.delete(this.shopUrl + "module-orders/order/" + sessionStorage.getItem('order_id'));
  }

}

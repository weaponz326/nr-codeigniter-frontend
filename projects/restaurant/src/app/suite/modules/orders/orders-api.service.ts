import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/restaurant/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrdersApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all order belonging to user

  public getOrders(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-orders/order?account=" + sessionStorage.getItem('restaurant_id'));
  }

  public postOrder(order): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-orders/order/", order);
  }

  // retreive, update and delete order

  public getSingleOrder(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-orders/order/" + sessionStorage.getItem('order_id'));
  }

  public putOrder(order): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-orders/order/" + sessionStorage.getItem('order_id'), order);
  }

  public deleteOrder(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-orders/order/" + sessionStorage.getItem('order_id'));
  }

// -----------------------------------------------------------------------------------------------------------------

  // order items

  // create and get all order items belonging to order

  public getItems(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-orders/order-item?order=" + sessionStorage.getItem('order_id'));
  }

  public postItem(item): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-orders/order-item/", item);
  }

  // retreive, update and delete order

  public getSingleItem(itemId): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-orders/order-item/" + itemId);
  }

  public putItem(itemId, itemData): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-orders/order-item/" + itemId, itemData);
  }

  public deleteItem(itemId): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-orders/order-item/" + itemId);
  }

  // --------------------------------------------------------------------------------------------------------------------------

  // get menu items for item dropdownlist

  public getMenuItems(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-menu/menu-item?account=" + sessionStorage.getItem('restaurant_id'));
  }

}

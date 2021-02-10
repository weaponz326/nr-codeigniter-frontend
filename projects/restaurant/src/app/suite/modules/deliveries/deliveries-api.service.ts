import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/restaurant/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DeliveriesApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all delveiries belonging to user

  public getDeliveries(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-deliveries/delivery-list?user=" + sessionStorage.getItem('restaurant_id'));
  }

  public postDelivery(item): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-deliveries/delivery/", item);
  }

  // retreive, update and delete order

  public getSingleDelivery(itemId): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-deliveries/delivery/" + itemId);
  }

  public putDelivery(itemId, itemData): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-deliveries/delivery/" + itemId, itemData);
  }

  public deleteDelivery(itemId): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-deliveries/delivery/" + itemId);
  }

  // get orders for select list

  public getOrders(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-deliveries/order-list?user=" + sessionStorage.getItem('restaurant_id'));
  }

}

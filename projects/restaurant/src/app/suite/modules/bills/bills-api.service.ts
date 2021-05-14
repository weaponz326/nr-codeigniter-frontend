import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/restaurant/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BillsApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all bills belonging to account

  public getBills(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-bills/bill?account=" + sessionStorage.getItem('restaurant_id'));
  }

  public postBill(bill): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-bills/bill/", bill);
  }

  // retreive, update and delete bill

  public getSingleBill(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-bills/bill/" + sessionStorage.getItem('bill_id'));
  }

  public putBill(bill): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-bills/bill/" + sessionStorage.getItem('bill_id'), bill);
  }

  public deleteBill(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-bills/bill/" + sessionStorage.getItem('bill_id'));
  }

  // get orders for selection window
  public getOrders(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-orders/order?account=" + sessionStorage.getItem('restaurant_id'));
  }

}

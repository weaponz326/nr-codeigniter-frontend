import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all rinks belonging to account

  public getRinks(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-portal/rink-list?account=" + sessionStorage.getItem('restaurant_id'));
  }

  public postRink(rink): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-portal/rink/", rink);
  }

  // get search results
  public getSearch(input: string, filter: string): Observable<any>{
    // return this.http.get(this.restaurantUrl + "accounts/search?input=" + input + "&filter=" + filter);
    return this.http.get(this.restaurantUrl + "accounts/search?search=" + input);
  }

  // get search detail of selected account
  public getDetail(account: string): Observable<any>{
    return this.http.get(this.restaurantUrl + "accounts/search/" + account);
  }

  // get accounts rinks with detailed detailed sender and recipient
  public getSingleRink(rinkId): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-portal/rink/" + rinkId);
  }

  // get single source for rink details

  public getSingleMenu(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-menu/menu/" + sessionStorage.getItem('source_id'));
  }

  public getSingleStaff(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-staff/staff/" + sessionStorage.getItem('source_id'));
  }

  public getSingleOrder(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-orders/order/" + sessionStorage.getItem('source_id'));
  }

  public getSingleDelivery(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-deliveries/delivery/" + sessionStorage.getItem('source_id'));
  }

  public getSingleCustomer(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-customers/customer/" + sessionStorage.getItem('source_id'));
  }

}

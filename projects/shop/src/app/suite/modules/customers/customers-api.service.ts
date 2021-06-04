import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomersApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all customers belonging to account

  public getCustomers(): Observable<any>{
    return this.http.get(this.shopUrl + "module-customers/customer?account=" + sessionStorage.getItem('shop_id'));
  }

  public postCustomer(customer): Observable<any>{
    return this.http.post(this.shopUrl + "module-customers/customer/", customer);
  }

  // retreive, update and delete customer

  public getSingleCustomer(): Observable<any>{
    return this.http.get(this.shopUrl + "module-customers/customer/" + sessionStorage.getItem('customer_id'));
  }

  public putCustomer(customer): Observable<any>{
    return this.http.put(this.shopUrl + "module-customers/customer/" + sessionStorage.getItem('customer_id'), customer);
  }

  public deleteCustomer(): Observable<any>{
    return this.http.delete(this.shopUrl + "module-customers/customer/" + sessionStorage.getItem('customer_id'));
  }

}

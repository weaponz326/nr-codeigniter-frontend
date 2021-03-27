import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/enterprise/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all rinks belonging to user

  public getRinks(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-portal/rink-list?user=" + sessionStorage.getItem('enterprise_id'));
  }

  public postRink(rink): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-portal/rink/", rink);
  }

  // get search results
  public getSearch(input: string, filter: string): Observable<any>{
    // return this.http.get(this.enterpriseUrl + "module-portal/search?input=" + input + "&filter=" + filter);
    return this.http.get(this.enterpriseUrl + "module-portal/search?search=" + input);
  }

  // get search detail of selected user
  public getDetail(user: string): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-portal/search-detail/" + user);
  }

  // get source for rink types window

  public getStaff(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-portal/staff-list?user=" + sessionStorage.getItem('enterprise_id'));
  }

  public getCustomers(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-portal/customer-list?user=" + sessionStorage.getItem('enterprise_id'));
  }

  public getMenus(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-portal/menu-list?user=" + sessionStorage.getItem('enterprise_id'));
  }

  // get users rinks with detailed detailed sender and recipient
  public getSingleRink(rinkId): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-portal/rink/" + rinkId);
  }

  // get single source for rink details

  public getSingleStaff(staffId): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-portal/staff/" + staffId);
  }

  public getSingleCustomer(customerId): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-portal/customer/" + customerId);
  }

  public getSingleMenu(menuId): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-portal/menu/" + menuId);
  }

}

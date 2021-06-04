import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StaffApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all staff belonging to account

  public getStaff(): Observable<any>{
    return this.http.get(this.shopUrl + "module-staff/staff?account=" + sessionStorage.getItem('shop_id'));
  }

  public postStaff(staff): Observable<any>{
    return this.http.post(this.shopUrl + "module-staff/staff/", staff);
  }

  // retreive, update and delete staff

  public getSingleStaff(): Observable<any>{
    return this.http.get(this.shopUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'));
  }

  public putStaff(staff): Observable<any>{
    return this.http.put(this.shopUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'), staff);
  }

  public deleteStaff(): Observable<any>{
    return this.http.delete(this.shopUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'));
  }

}

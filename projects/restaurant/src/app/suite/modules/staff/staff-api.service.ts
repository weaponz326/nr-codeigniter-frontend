import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/restaurant/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StaffApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all staffs belonging to user

  public getStaff(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-staff/staff?account=" + sessionStorage.getItem('restaurant_id'));
  }

  public postStaff(staff): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-staff/staff/", staff);
  }

  // retreive, update and delete staff

  public getSingleStaff(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'));
  }

  public putStaff(staff): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'), staff);
  }

  public deleteStaff(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'));
  }

}

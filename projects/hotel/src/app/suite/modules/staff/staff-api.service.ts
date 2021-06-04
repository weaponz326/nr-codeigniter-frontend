import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hotel/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StaffApiService {

  constructor(private http: HttpClient) { }

  hotelUrl = environment.hotelUrl;

  // create and get all staff belonging to account

  public getStaff(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-staff/staff?account=" + sessionStorage.getItem('hotel_id'));
  }

  public postStaff(staff): Observable<any>{
    return this.http.post(this.hotelUrl + "module-staff/staff/", staff);
  }

  // retreive, update and delete staff

  public getSingleStaff(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'));
  }

  public putStaff(staff): Observable<any>{
    return this.http.put(this.hotelUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'), staff);
  }

  public deleteStaff(): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'));
  }

}

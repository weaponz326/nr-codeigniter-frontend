import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StaffApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all staffs belonging to account

  public getStaff(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-staff/staff?account=" + sessionStorage.getItem('hospital_id'));
  }

  public postStaff(staff): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-staff/staff/", staff);
  }

  // retreive, update and delete staff

  public getSingleStaff(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'));
  }

  public putStaff(staff): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'), staff);
  }

  public deleteStaff(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'));
  }

}

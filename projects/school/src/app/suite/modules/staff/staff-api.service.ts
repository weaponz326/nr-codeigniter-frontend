import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StaffApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all staff belonging to user

  public getStaff(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-staff/staff-list?user=" + sessionStorage.getItem('school_id'));
  }

  public postStaff(staff): Observable<any>{
    return this.http.post(this.schoolUrl + "module-staff/staff/", staff);
  }

  // retreive, update and delete staff

  public getSingleStaff(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'));
  }

  public putStaff(staff): Observable<any>{
    return this.http.put(this.schoolUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'), staff);
  }

  public deleteStaff(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-staff/staff/" + sessionStorage.getItem('staff_id'));
  }

}

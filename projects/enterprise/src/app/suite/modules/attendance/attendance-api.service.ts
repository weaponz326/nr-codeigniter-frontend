import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AttendanceApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all attendance belonging to account

  public getAttendance(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-attendance/attendance?account=" + sessionStorage.getItem('enterprise_id'));
  }

  public postAttendance(attendance): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-attendance/attendance/", attendance);
  }

  // retreive, update and delete attendance

  public getSingleAttendance(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-attendance/attendance/" + sessionStorage.getItem('attendance_id'));
  }

  public putAttendance(attendance): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-attendance/attendance/" + sessionStorage.getItem('attendance_id'), attendance);
  }

  public deleteAttendance(): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-attendance/attendance/" + sessionStorage.getItem('attendance_id'));
  }

}

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

  // sheet
  // -------------------------------------------------------------------------------------------------------------------------

  public refreshSheet(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-attendance/refresh-sheet?attendance=" + sessionStorage.getItem('attendance_id'));
  }

  public getAttendanceDays(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-attendance/attendance-day?attendance=" + sessionStorage.getItem('attendance_id'));
  }

  public getAttendanceEmployees(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-attendance/attendance-employee?attendance=" + sessionStorage.getItem('attendance_id'));
  }

  public getAttendanceChecks(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-attendance/attendance-check?attendance=" + sessionStorage.getItem('attendance_id'));
  }

  public putAttendanceCheck(check, checkId): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-attendance/attendance-check/" + checkId, check);
  }

}

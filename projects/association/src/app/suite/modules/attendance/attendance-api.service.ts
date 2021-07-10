import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/association/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AttendanceApiService {

  constructor(private http: HttpClient) { }

  associationUrl = environment.associationUrl;

  // create and get all attendance belonging to account

  public getAttendance(): Observable<any>{
    return this.http.get(this.associationUrl + "module-attendance/attendance?account=" + sessionStorage.getItem('association_id'));
  }

  public postAttendance(attendance): Observable<any>{
    return this.http.post(this.associationUrl + "module-attendance/attendance/", attendance);
  }

  // retreive, update and delete attendance

  public getSingleAttendance(): Observable<any>{
    return this.http.get(this.associationUrl + "module-attendance/attendance/" + sessionStorage.getItem('attendance_id'));
  }

  public putAttendance(attendance): Observable<any>{
    return this.http.put(this.associationUrl + "module-attendance/attendance/" + sessionStorage.getItem('attendance_id'), attendance);
  }

  public deleteAttendance(): Observable<any>{
    return this.http.delete(this.associationUrl + "module-attendance/attendance/" + sessionStorage.getItem('attendance_id'));
  }

  // -------------------------------------------------------------------------------------------------------------------------
  // sheet

  public refreshSheet(): Observable<any>{
    return this.http.get(this.associationUrl + "module-attendance/refresh-sheet?attendance=" + sessionStorage.getItem('attendance_id'));
  }

  public postDay(day): Observable<any>{
    return this.http.post(this.associationUrl + "module-attendance/attendance-day/", day);
  }

  public getAttendanceDays(): Observable<any>{
    return this.http.get(this.associationUrl + "module-attendance/attendance-day?attendance=" + sessionStorage.getItem('attendance_id'));
  }

  public getAttendanceMembers(): Observable<any>{
    return this.http.get(this.associationUrl + "module-attendance/attendance-member?attendance=" + sessionStorage.getItem('attendance_id'));
  }

  public getAttendanceChecks(): Observable<any>{
    return this.http.get(this.associationUrl + "module-attendance/attendance-check?attendance=" + sessionStorage.getItem('attendance_id'));
  }

  public putAttendanceCheck(check, checkId): Observable<any>{
    return this.http.post(this.associationUrl + "module-attendance/attendance-check/" + checkId, check);
  }

}

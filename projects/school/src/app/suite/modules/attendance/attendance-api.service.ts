import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AttendanceApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all attendance belonging to account

  public getAttendance(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-attendance/attendance?account=" + sessionStorage.getItem('school_id'));
  }

  public postAttendance(attendance): Observable<any>{
    return this.http.post(this.schoolUrl + "module-attendance/attendance/", attendance);
  }

  // retreive, update and delete attendance

  public getSingleAttendance(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-attendance/attendance/" + sessionStorage.getItem('attendance_id'));
  }

  public putAttendance(attendance): Observable<any>{
    return this.http.put(this.schoolUrl + "module-attendance/attendance/" + sessionStorage.getItem('attendance_id'), attendance);
  }

  public deleteAttendance(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-attendance/attendance/" + sessionStorage.getItem('attendance_id'));
  }

  // get terms and classes for select windows

  public getTerms(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-terms/term?account=" + sessionStorage.getItem('school_id'));
  }

  public getClasses(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/class?account=" + sessionStorage.getItem('school_id'));
  }

  // sheet
  // -------------------------------------------------------------------------------------------------------------------------

  public refreshSheet(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-attendance/refresh-sheet?attendance=" + sessionStorage.getItem('attendance_id'));
  }

  public getAttendanceDays(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-attendance/attendance-day?attendance=" + sessionStorage.getItem('attendance_id'));
  }

  public getAttendanceStudents(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-attendance/attendance-employee?attendance=" + sessionStorage.getItem('attendance_id'));
  }

  public getAttendanceChecks(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-attendance/attendance-check?attendance=" + sessionStorage.getItem('attendance_id'));
  }

  public putAttendanceCheck(check, checkId): Observable<any>{
    return this.http.post(this.schoolUrl + "module-attendance/attendance-check/" + checkId, check);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReportsApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all reports belonging to account

  public getReports(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-reports/report?account=" + sessionStorage.getItem('school_id'));
  }

  public postReport(report): Observable<any>{
    return this.http.post(this.schoolUrl + "module-reports/report/", report);
  }

  // retreive, update and delete report

  public getSingleReport(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-reports/report/" + sessionStorage.getItem('report_id'));
  }

  public putReport(report): Observable<any>{
    return this.http.put(this.schoolUrl + "module-reports/report/" + sessionStorage.getItem('report_id'), report);
  }

  public deleteReport(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-reports/report/" + sessionStorage.getItem('report_id'));
  }

  // get terms and classes for select windows

  public getTerms(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-reports/term?account=" + sessionStorage.getItem('school_id'));
  }

  public getClasses(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-reports/class?account=" + sessionStorage.getItem('school_id'));
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LeaveApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all leave belonging to user

  public getLeave(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-leave/leave-list?user=" + sessionStorage.getItem('enterprise_id'));
  }

  public postLeave(leave): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-leave/leave/", leave);
  }

  // retreive, update and delete leave

  public getSingleLeave(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-leave/leave/" + sessionStorage.getItem('leave_id'));
  }

  public putLeave(leave): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-leave/leave/" + sessionStorage.getItem('leave_id'), leave);
  }

  public deleteLeave(): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-leave/leave/" + sessionStorage.getItem('leave_id'));
  }

}

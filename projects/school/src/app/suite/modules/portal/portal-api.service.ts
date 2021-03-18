import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/school/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all rinks belonging to user

  public getRinks(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-portal/rink-list?user=" + sessionStorage.getItem('school_id'));
  }

  public postRink(rink): Observable<any>{
    return this.http.post(this.schoolUrl + "module-portal/rink/", rink);
  }

  // get search results
  public getSearch(input: string, filter: string): Observable<any>{
    // return this.http.get(this.schoolUrl + "module-portal/search?input=" + input + "&filter=" + filter);
    return this.http.get(this.schoolUrl + "module-portal/search?search=" + input);
  }

  // get search detail of selected user
  public getDetail(user: string): Observable<any>{
    return this.http.get(this.schoolUrl + "module-portal/search-detail/" + user);
  }

  // get source for rink types window

  public getSudents(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-portal/sudent-list?user=" + sessionStorage.getItem('school_id'));
  }

  public getTeachers(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-portal/teacher-list?user=" + sessionStorage.getItem('school_id'));
  }

  public getSubjects(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-portal/subject-list?user=" + sessionStorage.getItem('school_id'));
  }

  // get users rinks with detailed detailed sender and recipient
  public getSingleRink(rinkId): Observable<any>{
    return this.http.get(this.schoolUrl + "module-portal/rink/" + rinkId);
  }

  // get single source for rink details

  public getSingleSudent(sudentId): Observable<any>{
    return this.http.get(this.schoolUrl + "module-portal/sudent/" + sudentId);
  }

  public getSingleTeacher(teacherId): Observable<any>{
    return this.http.get(this.schoolUrl + "module-portal/teacher/" + teacherId);
  }

  public getSingleSubject(subjectId): Observable<any>{
    return this.http.get(this.schoolUrl + "module-portal/subject/" + subjectId);
  }

}

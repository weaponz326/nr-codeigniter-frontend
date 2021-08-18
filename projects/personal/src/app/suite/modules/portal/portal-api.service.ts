import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(private http: HttpClient) { }

  personalUrl = environment.personalUrl;

  // create and get all sent and recieved by user

  public getRinks(): Observable<any>{
    return this.http.get(this.personalUrl + "module-portal/rink-list?user=" + localStorage.getItem('personal_id'));
  }

  public postRink(rink): Observable<any>{
    return this.http.post(this.personalUrl + "module-portal/rink/", rink);
  }

  // get search results
  public getSearch(input: string, filter: string): Observable<any>{
    // return this.http.get(this.personalUrl + "module-portal/search?input=" + input + "&filter=" + filter);
    return this.http.get(this.personalUrl + "module-portal/search/?search=" + input);
  }

  // get search detail of selected user
  public getDetail(user: string): Observable<any>{
    return this.http.get(this.personalUrl + "module-portal/search/" + user);
  }

  // get users rinks with detailed detailed sender and recipient
  public getSingleRink(rinkId): Observable<any>{
    return this.http.get(this.personalUrl + "module-portal/rink/" + rinkId);
  }

  // get source for rink select window

  public getTasks(): Observable<any>{
    return this.http.get(this.personalUrl + "module-tasks/task?user=" + localStorage.getItem('personal_id'));
  }

  public getAppointments(): Observable<any>{
    return this.http.get(this.personalUrl + "module-appointments/appointment?user=" + localStorage.getItem('personal_id'));
  }

  public getNotes(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/note?user=" + localStorage.getItem('personal_id'));
  }

  // get single source for rink details

  public getSingleTask(): Observable<any>{
    return this.http.get(this.personalUrl + "module-tasks/task/" + sessionStorage.getItem('source_id'));
  }

  public getSingleAppointment(): Observable<any>{
    return this.http.get(this.personalUrl + "module-appointments/appointment/" + sessionStorage.getItem('source_id'));
  }

  public getSingleNote(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/note/" + sessionStorage.getItem('source_id'));
  }

}

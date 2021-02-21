import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/hospital/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all rinks belonging to user

  public getRinks(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/rink-list?user=" + localStorage.getItem('hospital_id'));
  }

  public postRink(rink): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-portal/rink/", rink);
  }

  // get search results
  public getSearch(input: string, filter: string): Observable<any>{
    // return this.http.get(this.hospitalUrl + "module-portal/search?input=" + input + "&filter=" + filter);
    return this.http.get(this.hospitalUrl + "module-portal/search?search=" + input);
  }

  // get search detail of selected user
  public getDetail(user: string): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/search-detail/" + user);
  }

  // // get source for rink types window

  // public getTasks(): Observable<any>{
  //   return this.http.get(this.hospitalUrl + "module-portal/task-list?user=" + localStorage.getItem('hospital_id'));
  // }

  // public getAppointments(): Observable<any>{
  //   return this.http.get(this.hospitalUrl + "module-portal/appointment-list?user=" + localStorage.getItem('hospital_id'));
  // }

  // public getNotes(): Observable<any>{
  //   return this.http.get(this.hospitalUrl + "module-portal/note-list?user=" + localStorage.getItem('hospital_id'));
  // }

  // // get users rinks with detailed detailed sender and recipient
  // public getSingleRink(rinkId): Observable<any>{
  //   return this.http.get(this.hospitalUrl + "module-portal/rink/" + rinkId);
  // }

  // // get single source for rink details

  // public getSingleTask(taskId): Observable<any>{
  //   return this.http.get(this.hospitalUrl + "module-portal/task/" + taskId);
  // }

  // public getSingleAppointment(appointmentId): Observable<any>{
  //   return this.http.get(this.hospitalUrl + "module-portal/appointment/" + appointmentId);
  // }

  // public getSingleNote(noteId): Observable<any>{
  //   return this.http.get(this.hospitalUrl + "module-portal/note/" + noteId);
  // }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/personal/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CalendarApiService {

  personalUrl = environment.personalUrl;

  constructor(private http: HttpClient) { }

  // get all apointments belonging to a user
  public getAppointments(): Observable<any>{
    return this.http.get(this.personalUrl + "module-calendar/appointment-list?user=" + localStorage.getItem('personal_id'));
  }

  // create appointment
  public postAppointment(appointment: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-calendar/appointment/", appointment);
  }

}

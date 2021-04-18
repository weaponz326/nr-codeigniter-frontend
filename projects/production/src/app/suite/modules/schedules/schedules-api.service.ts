import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/production/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SchedulesApiService {

  constructor(private http: HttpClient) { }

  productionUrl = environment.productionUrl;

  // create and get all schedule belonging to user

  public getAllSchedules(): Observable<any>{
    return this.http.get(this.productionUrl + "module-schedules/schedule-list?user=" + sessionStorage.getItem('production_id'));
  }

  public postSchedule(schedule): Observable<any>{
    return this.http.post(this.productionUrl + "module-schedules/schedule/", schedule);
  }

  // retreive, update and delete schedule

  public getSingleSchedule(): Observable<any>{
    return this.http.get(this.productionUrl + "module-schedules/schedule/" + sessionStorage.getItem('schedule_id'));
  }

  public putSchedule(schedule): Observable<any>{
    return this.http.put(this.productionUrl + "module-schedules/schedule/" + sessionStorage.getItem('schedule_id'), schedule);
  }

  public deleteSchedule(): Observable<any>{
    return this.http.delete(this.productionUrl + "module-schedules/schedule/" + sessionStorage.getItem('schedule_id'));
  }

}

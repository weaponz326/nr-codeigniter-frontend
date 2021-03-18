import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TimetablesApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all timetables belonging to user

  public getTimetables(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-timetables/timetable-list?user=" + sessionStorage.getItem('school_id'));
  }

  public postTimetable(timetable): Observable<any>{
    return this.http.post(this.schoolUrl + "module-timetables/timetable/", timetable);
  }

  // retreive, update and delete timetable

  public getSingleTimetable(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-timetables/timetable/" + sessionStorage.getItem('timetable_id'));
  }

  public putTimetable(timetable): Observable<any>{
    return this.http.put(this.schoolUrl + "module-timetables/timetable/" + sessionStorage.getItem('timetable_id'), timetable);
  }

  public deleteTimetable(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-timetables/timetable/" + sessionStorage.getItem('timetable_id'));
  }

}

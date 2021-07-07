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

  // create and get all timetables belonging to account

  public getTimetables(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-timetables/timetable?account=" + sessionStorage.getItem('school_id'));
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

  // -------------------------------------------------------------------------------------------------------------------------------------
  // timetable config

  // class selection window
  public getClasses(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/class?account=" + sessionStorage.getItem('school_id'));
  }

  public getTimetableClasses(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-timetables/timetable-class?timetable=" + sessionStorage.getItem('timetable_id'));
  }

  public postTimetableClass(clas): Observable<any>{
    return this.http.post(this.schoolUrl + "module-timetables/timetable-class/", clas);
  }

  public getTimetablePeriods(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-timetables/timetable-period?timetable=" + sessionStorage.getItem('timetable_id'));
  }

  public postTimetablePeriod(timetable): Observable<any>{
    return this.http.post(this.schoolUrl + "module-timetables/timetable-period/", timetable);
  }
  
  // ---------------------------------------------------------------------------------------------------------------------------------
  // timetable sheets

  public refreshSheet(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-timetables/refresh-sheet?timetable=" + sessionStorage.getItem('timetable_id'));
  }

  public getFullSheet(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-timetables/full-sheet?timetable=" + sessionStorage.getItem('timetable_id'));
  }

  public getSingleClass(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-timetables/timetable-class/" + sessionStorage.getItem('timetable_class_id'));
  }

  public getClassSheet(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-timetables/class-sheet?timetable_class=" + sessionStorage.getItem('timetable_class_id'));
  }

}

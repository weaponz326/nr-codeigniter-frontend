import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TeachersApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all teachers belonging to account

  public getTeachers(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-teachers/teacher?account=" + sessionStorage.getItem('school_id'));
  }

  public postTeacher(teacher): Observable<any>{
    return this.http.post(this.schoolUrl + "module-teachers/teacher/", teacher);
  }

  // retreive, update and delete teacher

  public getSingleTeacher(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-teachers/teacher/" + sessionStorage.getItem('teacher_id'));
  }

  public putTeacher(teacher): Observable<any>{
    return this.http.put(this.schoolUrl + "module-teachers/teacher/" + sessionStorage.getItem('teacher_id'), teacher);
  }

  public deleteTeacher(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-teachers/teacher/" + sessionStorage.getItem('teacher_id'));
  }

}

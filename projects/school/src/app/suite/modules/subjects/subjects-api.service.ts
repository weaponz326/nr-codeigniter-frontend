import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SubjectsApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all subjects belonging to user

  public getSubjects(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-subjects/subject-list?user=" + sessionStorage.getItem('school_id'));
  }

  public postSubject(subject): Observable<any>{
    return this.http.post(this.schoolUrl + "module-subjects/subject/", subject);
  }

  // retreive, update and delete subject

  public getSingleSubject(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-subjects/subject/" + sessionStorage.getItem('subject_id'));
  }

  public putSubject(subject): Observable<any>{
    return this.http.put(this.schoolUrl + "module-subjects/subject/" + sessionStorage.getItem('subject_id'), subject);
  }

  public deleteSubject(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-subjects/subject/" + sessionStorage.getItem('subject_id'));
  }

  // retreive subject teachers
  public getTeachers(subject): Observable<any>{
    return this.http.get(this.schoolUrl + "module-subjects/teacher-list?subject=" + subject);
  }
}

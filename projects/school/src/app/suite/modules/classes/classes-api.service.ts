import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClassesApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all classes belonging to user

  public getClasses(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/class-list?user=" + sessionStorage.getItem('school_id'));
  }

  public postClass(clas): Observable<any>{
    return this.http.post(this.schoolUrl + "module-classes/class/", clas);
  }

  // retreive, update and delete class

  public getSingleClass(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/class/" + sessionStorage.getItem('class_id'));
  }

  public putClass(clas): Observable<any>{
    return this.http.put(this.schoolUrl + "module-classes/class/" + sessionStorage.getItem('class_id'), clas);
  }

  public deleteClass(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-classes/class/" + sessionStorage.getItem('class_id'));
  }

  // class' subjects

  public getAllSubjects(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/all-subject-list/" + sessionStorage.getItem('school_id'));
  }

  public getClassSubjects(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/class-subject-list/" + sessionStorage.getItem('class_id'));
  }

}

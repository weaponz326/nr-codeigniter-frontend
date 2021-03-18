import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentsApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all students belonging to user

  public getStudents(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-students/student-list?user=" + sessionStorage.getItem('school_id'));
  }

  public postStudent(student): Observable<any>{
    return this.http.post(this.schoolUrl + "module-students/student/", student);
  }

  // retreive, update and delete student

  public getSingleStudent(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-students/student/" + sessionStorage.getItem('student_id'));
  }

  public putStudent(student): Observable<any>{
    return this.http.put(this.schoolUrl + "module-students/student/" + sessionStorage.getItem('student_id'), student);
  }

  public deleteStudent(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-students/student/" + sessionStorage.getItem('student_id'));
  }

}

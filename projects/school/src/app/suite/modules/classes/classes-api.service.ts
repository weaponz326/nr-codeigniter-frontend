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

  // create and get all classes belonging to account

  public getClasses(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/class?account=" + sessionStorage.getItem('school_id'));
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

  // class's subjects
  // ---------------------------------------------------------------------------------------------------------------

  public getAllClassSubjects(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/class-subject?clas=" + sessionStorage.getItem('class_id'));
  }

  public postClassSubject(subject): Observable<any>{
    return this.http.post(this.schoolUrl + "module-classes/class-subject/", subject);
  }

  public getSingleClassSubject(subjectId): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/class-subject/" + subjectId);
  }

  public putClassSubject(subjectId, subject): Observable<any>{
    return this.http.put(this.schoolUrl + "module-classes/class-subject/" + subjectId, subject);
  }

  public deleteClassSubject(subjectId): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-classes/class-subject/" + subjectId);
  }

  // get subjects for selection window
  public getAllSubjects(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-subjects/subject?account" + sessionStorage.getItem('school_id'));
  }

  // class's students
  // ---------------------------------------------------------------------------------------------------------------

  public getAllClassStudents(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/class-student?clas=" + sessionStorage.getItem('class_id'));
  }

  public postClassStudent(student): Observable<any>{
    return this.http.post(this.schoolUrl + "module-classes/class-student/", student);
  }

  public getSingleClassStudent(studentId): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/class-student/" + studentId);
  }

  public putClassStudent(studentId, student): Observable<any>{
    return this.http.put(this.schoolUrl + "module-classes/class-student/" + studentId, student);
  }

  public deleteClassStudent(studentId): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-classes/class-student/" + studentId);
  }

  // get subjects for selection window
  public getAllStudents(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-students/student?account=" + sessionStorage.getItem('school_id'));
  }

}

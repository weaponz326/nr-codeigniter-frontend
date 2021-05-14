import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentsApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all parents belonging to user

  public getParents(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-parents/parent?account=" + sessionStorage.getItem('school_id'));
  }

  public postParent(parent): Observable<any>{
    return this.http.post(this.schoolUrl + "module-parents/parent/", parent);
  }

  // retreive, update and delete parent

  public getSingleParent(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-parents/parent/" + sessionStorage.getItem('parent_id'));
  }

  public putParent(parent): Observable<any>{
    return this.http.put(this.schoolUrl + "module-parents/parent/" + sessionStorage.getItem('parent_id'), parent);
  }

  public deleteParent(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-parents/parent/" + sessionStorage.getItem('parent_id'));
  }

  // gets all students in a school for selection
  public getAllStudents(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-students/student?account=" + sessionStorage.getItem('school_id'));
  }

  // --------------------------------------------------------------------------------------------------------------------------------------

  // create and get wards belonging to a parent

  public getWards(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-parents/parent-ward?parent=" + sessionStorage.getItem('parent_id'));
  }

  public postWard(ward): Observable<any>{
    return this.http.post(this.schoolUrl + "module-parents/parent-ward/", ward);
  }

  // delete ward
  public deleteWard(wardId): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-parents/parent-ward/" + wardId);
  }

}

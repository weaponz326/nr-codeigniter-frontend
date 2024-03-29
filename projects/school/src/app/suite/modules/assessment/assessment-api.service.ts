import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AssessmentApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all assessment belonging to account

  public getAssessment(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-assessment/assessment?account=" + sessionStorage.getItem('school_id'));
  }

  public postAssessment(assessment): Observable<any>{
    return this.http.post(this.schoolUrl + "module-assessment/assessment/", assessment);
  }

  // retreive, update and delete assessment

  public getSingleAssessment(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-assessment/assessment/" + sessionStorage.getItem('assessment_id'));
  }

  public putAssessment(assessment): Observable<any>{
    return this.http.put(this.schoolUrl + "module-assessment/assessment/" + sessionStorage.getItem('assessment_id'), assessment);
  }

  public deleteAssessment(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-assessment/assessment/" + sessionStorage.getItem('assessment_id'));
  }

  // gets all term, subjects and classes in a school for selection

  public getTerms(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-terms/term?account=" + sessionStorage.getItem('school_id'));
  }

  public getSubjects(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-subjects/subject?account=" + sessionStorage.getItem('school_id'));
  }

  public getClasses(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/class?account=" + sessionStorage.getItem('school_id'));
  }

  // sheet
  // -----------------------------------------------------------------------------------------------------------------------------------

  public refreshSheet(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-assessment/refresh-sheet?assessment=" + sessionStorage.getItem('assessment_id'));
  }

  public getClassSheet(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-assessment/class-sheet?assessment=" + sessionStorage.getItem('assessment_id'));
  }

  public postClassSheet(sheet): Observable<any>{
    return this.http.post(this.schoolUrl + "module-assessment/class-sheet/", sheet);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TermsApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all terms belonging to account

  public getTerms(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-terms/term?account=" + sessionStorage.getItem('school_id'));
  }

  public postTerm(term): Observable<any>{
    return this.http.post(this.schoolUrl + "module-terms/term/", term);
  }

  // retreive, update and delete term

  public getSingleTerm(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-terms/term/" + sessionStorage.getItem('term_id'));
  }

  public putTerm(term): Observable<any>{
    return this.http.put(this.schoolUrl + "module-terms/term/" + sessionStorage.getItem('term_id'), term);
  }

  public deleteTerm(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-terms/term/" + sessionStorage.getItem('term_id'));
  }

}

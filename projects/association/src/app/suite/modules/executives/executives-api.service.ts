import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/association/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExecutivesApiService {

  constructor(private http: HttpClient) { }

  associationUrl = environment.associationUrl;

  // create and get all executives belonging to account

  public getExecutives(): Observable<any>{
    return this.http.get(this.associationUrl + "module-executives/executive?account=" + sessionStorage.getItem('association_id'));
  }

  public postExecutive(executive): Observable<any>{
    return this.http.post(this.associationUrl + "module-executives/executive/", executive);
  }

  // retreive, update and delete executive

  public getSingleExecutive(): Observable<any>{
    return this.http.get(this.associationUrl + "module-executives/executive/" + sessionStorage.getItem('executive_id'));
  }

  public putExecutive(executive): Observable<any>{
    return this.http.put(this.associationUrl + "module-executives/executive/" + sessionStorage.getItem('executive_id'), executive);
  }

  public deleteExecutive(): Observable<any>{
    return this.http.delete(this.associationUrl + "module-executives/executive/" + sessionStorage.getItem('executive_id'));
  }

}

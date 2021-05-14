import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppraisalApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all appraisal belonging to account

  public getAllAppraisal(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-appraisal/appraisal?account=" + sessionStorage.getItem('enterprise_id'));
  }

  public postAppraisal(appraisal): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-appraisal/appraisal/", appraisal);
  }

  // retreive, update and delete appraisal

  public getSingleAppraisal(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-appraisal/appraisal/" + sessionStorage.getItem('appraisal_id'));
  }

  public putAppraisal(appraisal): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-appraisal/appraisal/" + sessionStorage.getItem('appraisal_id'), appraisal);
  }

  public deleteAppraisal(): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-appraisal/appraisal/" + sessionStorage.getItem('appraisal_id'));
  }

  // employees

  public getEmployees(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-employees/employee?account=" + sessionStorage.getItem('enterprise_id'));
  }

}

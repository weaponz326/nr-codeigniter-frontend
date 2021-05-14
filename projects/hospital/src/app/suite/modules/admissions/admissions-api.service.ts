import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdmissionsApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all admissions belonging to user

  public getAdmissions(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-admissions/admission?account=" + sessionStorage.getItem('hospital_id'));
  }

  public postAdmission(admission): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-admissions/admission/", admission);
  }

  // retreive, update and delete admission

  public getSingleAdmission(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-admissions/admission/" + sessionStorage.getItem('admission_id'));
  }

  public putAdmission(admission): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-admissions/admission/" + sessionStorage.getItem('admission_id'), admission);
  }

  public deleteAdmission(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-admissions/admission/" + sessionStorage.getItem('admission_id'));
  }

  // get patients for selection window

  public getPatients(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-patients/patient?account=" + sessionStorage.getItem('hospital_id'));
  }

}

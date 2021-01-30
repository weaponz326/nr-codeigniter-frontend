import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DiagnosisApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;
  
  // create and get all diagnosis belonging to user

  public getAllDiagnosis(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-diagnosis/diagnosis-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public postDiagnosis(diagnosis): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-diagnosis/diagnosis/", diagnosis);
  }

  // retreive, update and delete diagnosis

  public getSingleDiagnosis(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-diagnosis/diagnosis/" + sessionStorage.getItem('diagnosis_id'));
  }

  public putDiagnosis(diagnosis): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-diagnosis/diagnosis/" + sessionStorage.getItem('diagnosis_id'), diagnosis);
  }

  public deleteDiagnosis(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-diagnosis/diagnosis/" + sessionStorage.getItem('diagnosis_id'));
  }

  // get patients and doctors for selection window

  public getPatients(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-diagnosis/patient-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public getDoctors(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-diagnosis/doctor-list?user=" + sessionStorage.getItem('hospital_id'));
  }

}

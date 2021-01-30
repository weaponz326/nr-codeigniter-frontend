import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientsApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all patients belonging to user

  public getPatients(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-patients/patient-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public postPatient(patient): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-patients/patient/", patient);
  }

  // retreive, update and delete patient

  public getSinglePatient(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-patients/patient/" + sessionStorage.getItem('patient_id'));
  }

  public putPatient(patient): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-patients/patient/" + sessionStorage.getItem('patient_id'), patient);
  }

  public deletePatient(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-patients/patient/" + sessionStorage.getItem('patient_id'));
  }

}

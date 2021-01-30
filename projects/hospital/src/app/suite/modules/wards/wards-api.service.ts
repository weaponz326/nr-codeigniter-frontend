import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WardsApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all wards belonging to user

  public getWards(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-wards/ward-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public postWard(ward): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-wards/ward/", ward);
  }

  // retreive, update and delete ward

  public getSingleWard(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-wards/ward/" + sessionStorage.getItem('ward_id'));
  }

  public putWard(ward): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-wards/ward/" + sessionStorage.getItem('ward_id'), ward);
  }

  public deleteWard(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-wards/ward/" + sessionStorage.getItem('ward_id'));
  }

  // -----------------------------------------------------------------------------------------------------------
  // ward's patients

  public getWardPatients(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-wards/ward-patient-list?ward=" + sessionStorage.getItem('ward_id'));
  }

  public postWardPatient(wardData): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-wards/new-ward-patient/", wardData);
  }

  // retreive, update and delete ward's patient

  public getSingleWardPatient(patientId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-wards/ward-patient/" + patientId);
  }

  public putWardPatient(patientId, patientData): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-wards/ward-patient/" + patientId, patientData);
  }

  public deleteWardPatient(patientId): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-wards/ward-patient/" + patientId);
  }

  // --------------------------------------------------------------------------------------------------------------------------

  // get patients for selection window

  public getPatients(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-wards/patient-list?user=" + sessionStorage.getItem('hospital_id'));
  }

}

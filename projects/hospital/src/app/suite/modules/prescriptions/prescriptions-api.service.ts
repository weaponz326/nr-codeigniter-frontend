import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PrescriptionsApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all prescription belonging to user

  public getPrescriptions(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-prescriptions/prescription-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public postPrescription(prescription): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-prescriptions/new-prescription/", prescription);
  }

  // retreive, update and delete prescription

  public getSinglePrescription(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-prescriptions/prescription/" + sessionStorage.getItem('prescription_id'));
  }

  public putPrescription(prescription): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-prescriptions/prescription/" + sessionStorage.getItem('prescription_id'), prescription);
  }

  public deletePrescription(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-prescriptions/prescription/" + sessionStorage.getItem('prescription_id'));
  }

// -----------------------------------------------------------------------------------------------------------------

  // prescription details

  // create and get all medicine details belonging to prescription

  public getDetails(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-prescriptions/detail-list?user=" + sessionStorage.getItem('prescription_id'));
  }

  public postDetail(detail): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-prescriptions/detail/", detail);
  }

  // retreive, update and delete prescription

  public getSingleDetail(detailId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-prescriptions/detail/" + detailId);
  }

  public putDetail(detailId, detailData): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-prescriptions/detail/" + detailId, detailData);
  }

  public deleteDetail(detailId): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-prescriptions/detail/" + detailId);
  }

// --------------------------------------------------------------------------------------------------------------------------

  // get patients and doctors for selection window

  public getPatients(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-prescriptions/patient-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public getDoctors(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-prescriptions/doctor-list?user=" + sessionStorage.getItem('hospital_id'));
  }

}

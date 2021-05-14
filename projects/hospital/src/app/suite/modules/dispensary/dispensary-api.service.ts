import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DispensaryApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all dispensary belonging to account

  public getDispensary(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-dispensary/dispensary?account=" + sessionStorage.getItem('hospital_id'));
  }

  public postDispensary(dispensary): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-dispensary/dispensary/", dispensary);
  }

  // retreive, update and delete dispensary

  public getSingleDispensary(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-dispensary/dispensary/" + sessionStorage.getItem('dispensary_id'));
  }

  public putDispensary(dispensary): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-dispensary/dispensary/" + sessionStorage.getItem('dispensary_id'), dispensary);
  }

  public deleteDispensary(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-dispensary/dispensary/" + sessionStorage.getItem('dispensary_id'));
  }

// -------------------------------------------------------------------------------------------------------------------------------------------------------
  // prescription details

  // create and get all drug details belonging to dispense

  public getDetails(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-dispensary/dispensary-drug?dispensary=" + sessionStorage.getItem('dispensary_id'));
  }

  public postDetail(detail): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-dispensary/dispensary-drug/", detail);
  }

  // retreive, update and delete dispensary

  public getSingleDetail(detailId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-dispensary/dispensary-drug/" + detailId);
  }

  public putDetail(detailId, detailData): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-dispensary/dispensary-drug/" + detailId, detailData);
  }

  public deleteDetail(detailId): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-dispensary/dispensary-drug/" + detailId);
  }

// --------------------------------------------------------------------------------------------------------------------------

  // get prescriptions for selection window

  public getPrescriptions(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-prescriptions/prescription?account=" + sessionStorage.getItem('hospital_id'));
  }

  public getPrescriptionDrugs(prescriptionId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-prescriptions/detail?prescription=" + prescriptionId);
  }

  public getDrugs(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-drugs/drug?account=" + sessionStorage.getItem('hospital_id'));
  }

}

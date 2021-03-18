import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/hospital/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all rinks belonging to user

  public getRinks(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/rink-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public postRink(rink): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-portal/rink/", rink);
  }

  // get search results
  public getSearch(input: string, filter: string): Observable<any>{
    // return this.http.get(this.hospitalUrl + "module-portal/search?input=" + input + "&filter=" + filter);
    return this.http.get(this.hospitalUrl + "module-portal/search?search=" + input);
  }

  // get search detail of selected user
  public getDetail(user: string): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/search-detail/" + user);
  }

  // get source for rink types window

  public getAdmissions(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/admission-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public getPatients(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/patient-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public getDoctors(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/doctor-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public getNurses(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/nurse-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  // get users rinks with detailed detailed sender and recipient
  public getSingleRink(rinkId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/rink/" + rinkId);
  }

  // get single source for rink details

  public getSingleAdmission(admissionId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/admission/" + admissionId);
  }

  public getSinglePatient(patientId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/patient/" + patientId);
  }

  public getSingleDoctor(doctorId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/doctor/" + doctorId);
  }

  public getSingleNurse(nurseId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-portal/nurse/" + nurseId);
  }

}

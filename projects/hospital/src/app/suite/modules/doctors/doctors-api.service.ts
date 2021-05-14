import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorsApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all doctors belonging to account

  public getDoctors(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-doctors/doctor?account=" + sessionStorage.getItem('hospital_id'));
  }

  public postDoctor(doctor): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-doctors/doctor/", doctor);
  }

  // retreive, update and delete doctor

  public getSingleDoctor(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-doctors/doctor/" + sessionStorage.getItem('doctor_id'));
  }

  public putDoctor(doctor): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-doctors/doctor/" + sessionStorage.getItem('doctor_id'), doctor);
  }

  public deleteDoctor(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-doctors/doctor/" + sessionStorage.getItem('doctor_id'));
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LaboratoryApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all labs belonging to user

  public getLabs(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-laboratory/lab-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public postLab(lab): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-laboratory/lab/", lab);
  }

  // retreive, update and delete lab

  public getSingleLab(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-laboratory/lab/" + sessionStorage.getItem('lab_id'));
  }

  public putLab(lab): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-laboratory/lab/" + sessionStorage.getItem('lab_id'), lab);
  }

  public deleteLab(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-laboratory/lab/" + sessionStorage.getItem('lab_id'));
  }

  // get patients and doctors for selection window

  public getPatients(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-laboratory/patient-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public getDoctors(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-laboratory/doctor-list?user=" + sessionStorage.getItem('hospital_id'));
  }

}

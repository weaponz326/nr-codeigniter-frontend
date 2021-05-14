import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all appointments belonging to user

  public getAppointments(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-appointments/appointment?account=" + sessionStorage.getItem('hospital_id'));
  }

  public postAppointment(appointment): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-appointments/appointment/", appointment);
  }

  // retreive, update and delete appointment

  public getSingleAppointment(appoitmentId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-appointments/appointment/" + appoitmentId);
  }

  public putAppointment(appointment, appoitmentId): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-appointments/appointment/" + appoitmentId, appointment);
  }

  public deleteAppointment(appoitmentId): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-appointments/appointment/" + appoitmentId);
  }

  // get patients and doctors for selection window
  // TODO: change url and get param after doing doctors module

  public getPatients(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-patients/patient?account=" + sessionStorage.getItem('hospital_id'));
  }

  public getDoctors(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-doctors/doctor?account=" + sessionStorage.getItem('hospital_id'));
  }

}

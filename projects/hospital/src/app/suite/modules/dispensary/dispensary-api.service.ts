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

  // create and get all dispensary belonging to user

  public getDispensary(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-dispensary/dispensary-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public postDispensary(dispensary): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-dispensary/new-dispensary/", dispensary);
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
    return this.http.get(this.hospitalUrl + "module-dispensary/detail-list?user=" + sessionStorage.getItem('dispensary_id'));
  }

  public postDetail(detail): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-dispensary/detail/", detail);
  }

  // retreive, update and delete dispensary

  public getSingleDetail(detailId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-dispensary/detail/" + detailId);
  }

  public putDetail(detailId, detailData): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-dispensary/detail/" + detailId, detailData);
  }

  public deleteDetail(detailId): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-dispensary/detail/" + detailId);
  }

// --------------------------------------------------------------------------------------------------------------------------

  // get prescriptions for selection window

  public getPrescriptions(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-dispensary/prescription-list?user=" + sessionStorage.getItem('hospital_id'));
  }

}

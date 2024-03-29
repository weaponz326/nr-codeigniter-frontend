import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DrugsApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all drugs belonging to account

  public getDrugs(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-drugs/drug?account=" + sessionStorage.getItem('hospital_id'));
  }

  public postDrug(drug): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-drugs/drug/", drug);
  }

  // retreive, update and delete drug

  public getSingleDrug(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-drugs/drug/" + sessionStorage.getItem('drug_id'));
  }

  public putDrug(drug): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-drugs/drug/" + sessionStorage.getItem('drug_id'), drug);
  }

  public deleteDrug(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-drugs/drug/" + sessionStorage.getItem('drug_id'));
  }

}

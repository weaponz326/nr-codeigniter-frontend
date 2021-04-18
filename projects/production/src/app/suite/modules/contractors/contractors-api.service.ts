import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/production/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContractorsApiService {

  constructor(private http: HttpClient) { }

  productionUrl = environment.productionUrl;

  // create and get all contractors belonging to user

  public getContractors(): Observable<any>{
    return this.http.get(this.productionUrl + "module-contractors/contractor-list?user=" + sessionStorage.getItem('production_id'));
  }

  public postContractor(contractor): Observable<any>{
    return this.http.post(this.productionUrl + "module-contractors/contractor/", contractor);
  }

  // retreive, update and delete contractor

  public getSingleContractor(): Observable<any>{
    return this.http.get(this.productionUrl + "module-contractors/contractor/" + sessionStorage.getItem('contractor_id'));
  }

  public putContractor(contractor): Observable<any>{
    return this.http.put(this.productionUrl + "module-contractors/contractor/" + sessionStorage.getItem('contractor_id'), contractor);
  }

  public deleteContractor(): Observable<any>{
    return this.http.delete(this.productionUrl + "module-contractors/contractor/" + sessionStorage.getItem('contractor_id'));
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/production/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ManufacturingApiService {

  constructor(private http: HttpClient) { }

  productionUrl = environment.productionUrl;

  // create and get all manufacturing belonging to account

  public getAllManufacturing(): Observable<any>{
    return this.http.get(this.productionUrl + "module-manufacturing/manufacturing?account=" + sessionStorage.getItem('production_id'));
  }

  public postManufacturing(manufacturing): Observable<any>{
    return this.http.post(this.productionUrl + "module-manufacturing/manufacturing/", manufacturing);
  }

  // retreive, update and delete manufacturing

  public getSingleManufacturing(): Observable<any>{
    return this.http.get(this.productionUrl + "module-manufacturing/manufacturing/" + sessionStorage.getItem('manufacturing_id'));
  }

  public putManufacturing(manufacturing): Observable<any>{
    return this.http.put(this.productionUrl + "module-manufacturing/manufacturing/" + sessionStorage.getItem('manufacturing_id'), manufacturing);
  }

  public deleteManufacturing(): Observable<any>{
    return this.http.delete(this.productionUrl + "module-manufacturing/manufacturing/" + sessionStorage.getItem('manufacturing_id'));
  }

}

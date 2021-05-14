import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FeesApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all fees belonging to account

  public getAllFees(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/fees?account=" + sessionStorage.getItem('school_id'));
  }

  public postFee(fees): Observable<any>{
    return this.http.post(this.schoolUrl + "module-fees/fees/", fees);
  }

  // retreive, update and delete fee

  public getSingleFees(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/fees/" + sessionStorage.getItem('fees_id'));
  }

  public putFees(fee): Observable<any>{
    return this.http.put(this.schoolUrl + "module-fees/fees/" + sessionStorage.getItem('fees_id'), fee);
  }

  public deleteFees(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-fees/fees/" + sessionStorage.getItem('fees_id'));
  }

  // ------------------------------------------------------------------------------------------------------------------
  // fees items

  // create and get all fees belonging to account

  public getAllFeesItems(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/fees-item?fees=" + sessionStorage.getItem('fees_id'));
  }

  public postFeesItem(item): Observable<any>{
    return this.http.post(this.schoolUrl + "module-fees/fees-item/", item);
  }

  // retreive, update and delete fee

  public getSingleFeesItem(itemId): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/fees-tem/" + itemId);
  }

  public putFeesItem(itemId, item): Observable<any>{
    return this.http.put(this.schoolUrl + "module-fees/fees-item/" + itemId, item);
  }

  public deleteFeesItem(itemId): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-fees/fees-item/" + itemId);
  }


}

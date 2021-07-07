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

  // all classes for selection window
  public getAllClasses(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-classes/class?account=" + sessionStorage.getItem('school_id'));
  }

  // target classes

  public getTargetClasses(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/target-class?fee=" + sessionStorage.getItem('fees_id'));
  }

  public postTargetClass(clas): Observable<any>{
    return this.http.post(this.schoolUrl + "module-fees/target-class/", clas);
  }

  public deleteTargetClass(targetId): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-fees/target-class/" + targetId);
  }

  // ------------------------------------------------------------------------------------------------------------------
  // fees items and arrears

  // fees items

  public getAllFeesItems(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/fees-item?fee=" + sessionStorage.getItem('fees_id'));
  }

  public postFeesItem(item): Observable<any>{
    return this.http.post(this.schoolUrl + "module-fees/fees-item/", item);
  }

  public getSingleFeesItem(itemId): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/fees-tem/" + itemId);
  }

  public putFeesItem(itemId, item): Observable<any>{
    return this.http.put(this.schoolUrl + "module-fees/fees-item/" + itemId, item);
  }

  public deleteFeesItem(itemId): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-fees/fees-item/" + itemId);
  }

  // arrears

  public getAllArrears(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/arrears-item?fee=" + sessionStorage.getItem('fees_id'));
  }

  public postArrears(arrears): Observable<any>{
    return this.http.post(this.schoolUrl + "module-fees/arrears-item/", arrears);
  }

  // retreive, update and delete fee

  public getSingleArrears(arrearsId): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/arrears-tem/" + arrearsId);
  }

  public putArrears(arrearsId, arrears): Observable<any>{
    return this.http.put(this.schoolUrl + "module-fees/arrears-item/" + arrearsId, arrears);
  }

  public deleteArrears(arrearsId): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-fees/arrears-item/" + arrearsId);
  }

  // ----------------------------------------------------------------------------------------------------------------
  // bills

  public generateBill(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/generate-bill?fee=" + sessionStorage.getItem('fees_id'));
  }

  public getFeesBills(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/bill?fee=" + sessionStorage.getItem('fees_id'));
  }

  public getStudentBill(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/bill/" + sessionStorage.getItem('fees_bill_id'));
  }

  public getBillArrears(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-fees/bill-arrears?bill=" + sessionStorage.getItem('fees_bill_id'));
  }

}

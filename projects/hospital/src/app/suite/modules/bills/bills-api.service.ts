import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BillsApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all bills belonging to user

  public getBills(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-bills/bill?account=" + sessionStorage.getItem('hospital_id'));
  }

  public postBill(bill): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-bills/bill/", bill);
  }

  // retreive, update and delete bill

  public getSingleBill(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-bills/bill/" + sessionStorage.getItem('bill_id'));
  }

  public putBill(bill): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-bills/bill/" + sessionStorage.getItem('bill_id'), bill);
  }

  public deleteBill(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-bills/bill/" + sessionStorage.getItem('bill_id'));
  }

  // -------------------------------------------------------------------------------------------------------------
  // general bill items

  public getGeneralItems(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-bills/general?bill=" + sessionStorage.getItem('bill_id'));
  }

  public postGeneralItem(generalItem): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-bills/general/", generalItem);
  }

  // retreive, update and delete generalItem

  public getSingleGeneralItem(generalItemId): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-bills/general/" + generalItemId);
  }

  public putGeneralItem(generalItemId, generalItem): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-bills/general/" + generalItemId, generalItem);
  }

  public deleteGeneralItem(generalItemId): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-bills/general/" + generalItemId);
  }

  // ---------------------------------------------------------------------------------------------------------
  // get patients and admissions for selection window

  public getPatients(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-patients/patient?account=" + sessionStorage.getItem('hospital_id'));
  }

  public getAdmissions(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-admissions/admission?account=" + sessionStorage.getItem('hospital_id'));
  }

  // -------------------------------------------------------------------------------------------------------------------------
  // get other bill items
  // TODO: look at this again when their respective modules are done

  public getAppointmentsItems(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-appoitnments/charges?account=" + sessionStorage.getItem('hospital_id'));
  }

  public getLaboratoryItems(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-laboratory/charges?account=" + sessionStorage.getItem('hospital_id'));
  }

  public getDispensaryItems(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-dispensary/charges?account=" + sessionStorage.getItem('hospital_id'));
  }

  public getWardsItems(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-wards/charges?account=" + sessionStorage.getItem('hospital_id'));
  }

}

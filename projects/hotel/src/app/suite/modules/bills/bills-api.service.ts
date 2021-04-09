import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hotel/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BillsApiService {

  constructor(private http: HttpClient) { }

  hotelUrl = environment.hotelUrl;

  // create and get all bills belonging to user

  public getBills(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-bills/bill-list?user=" + sessionStorage.getItem('hotel_id'));
  }

  public postBill(bill): Observable<any>{
    return this.http.post(this.hotelUrl + "module-bills/bill/", bill);
  }

  // retreive, update and delete bill

  public getSingleBill(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-bills/bill/" + sessionStorage.getItem('bill_id'));
  }

  public putBill(bill): Observable<any>{
    return this.http.put(this.hotelUrl + "module-bills/bill/" + sessionStorage.getItem('bill_id'), bill);
  }

  public deleteBill(): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-bills/bill/" + sessionStorage.getItem('bill_id'));
  }

}

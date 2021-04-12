import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PurchasingApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all purchasing belonging to user

  public getPurchasing(): Observable<any>{
    return this.http.get(this.shopUrl + "module-purchasing/purchasing-list?user=" + sessionStorage.getItem('shop_id'));
  }

  public postPurchasing(purchasing): Observable<any>{
    return this.http.post(this.shopUrl + "module-purchasing/purchasing/", purchasing);
  }

  // retreive, update and delete purchasing

  public getSinglePurchasing(): Observable<any>{
    return this.http.get(this.shopUrl + "module-purchasing/purchasing/" + sessionStorage.getItem('purchasing_id'));
  }

  public putPurchasing(purchasing): Observable<any>{
    return this.http.put(this.shopUrl + "module-purchasing/purchasing/" + sessionStorage.getItem('purchasing_id'), purchasing);
  }

  public deletePurchasing(): Observable<any>{
    return this.http.delete(this.shopUrl + "module-purchasing/purchasing/" + sessionStorage.getItem('purchasing_id'));
  }

}

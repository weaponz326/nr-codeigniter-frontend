import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/production/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PurchasingApiService {

  constructor(private http: HttpClient) { }

  productionUrl = environment.productionUrl;

  // create and get all purchasing belonging to account

  public getPurchasing(): Observable<any>{
    return this.http.get(this.productionUrl + "module-purchasing/purchasing?account=" + sessionStorage.getItem('production_id'));
  }

  public postPurchasing(purchasing): Observable<any>{
    return this.http.post(this.productionUrl + "module-purchasing/purchasing/", purchasing);
  }

  // retreive, update and delete purchasing

  public getSinglePurchasing(): Observable<any>{
    return this.http.get(this.productionUrl + "module-purchasing/purchasing/" + sessionStorage.getItem('purchasing_id'));
  }

  public putPurchasing(purchasing): Observable<any>{
    return this.http.put(this.productionUrl + "module-purchasing/purchasing/" + sessionStorage.getItem('purchasing_id'), purchasing);
  }

  public deletePurchasing(): Observable<any>{
    return this.http.delete(this.productionUrl + "module-purchasing/purchasing/" + sessionStorage.getItem('purchasing_id'));
  }

  // ----------------------------------------------------------------------------------------------------------------------------------------
  // purchasing item

  public getPurchasingItem(): Observable<any>{
    return this.http.get(this.productionUrl + "module-purchasing/purchasing-item?purchasing=" + sessionStorage.getItem('purchasing_id'));
  }

  public postPurchasingItem(item): Observable<any>{
    return this.http.post(this.productionUrl + "module-purchasing/purchasing-item/", item);
  }

  // retreive, update and delete purchasing

  public getSinglePurchasingItem(itemId): Observable<any>{
    return this.http.get(this.productionUrl + "module-purchasing/purchasing-item/" + itemId);
  }

  public putPurchasingItem(itemId, item): Observable<any>{
    return this.http.put(this.productionUrl + "module-purchasing/purchasing-item/" + itemId, item);
  }

  public deletePurchasingItem(itemId): Observable<any>{
    return this.http.delete(this.productionUrl + "module-purchasing/purchasing-item/" + itemId);
  }

}

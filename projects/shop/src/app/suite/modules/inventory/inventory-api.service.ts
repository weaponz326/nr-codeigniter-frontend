import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InventoryApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all inventory belonging to user

  public getAllInventory(): Observable<any>{
    return this.http.get(this.shopUrl + "module-inventory/inventory-list?user=" + sessionStorage.getItem('shop_id'));
  }

  public postInventory(inventory): Observable<any>{
    return this.http.post(this.shopUrl + "module-inventory/inventory/", inventory);
  }

  // retreive, update and delete inventory

  public getSingleInventory(inventoryId): Observable<any>{
    return this.http.get(this.shopUrl + "module-inventory/inventory/" + inventoryId);
  }

  public putInventory(inventory, inventoryId): Observable<any>{
    return this.http.put(this.shopUrl + "module-inventory/inventory/" + inventoryId, inventory);
  }

  public deleteInventory(inventoryId): Observable<any>{
    return this.http.delete(this.shopUrl + "module-inventory/inventory/" + inventoryId);
  }

}

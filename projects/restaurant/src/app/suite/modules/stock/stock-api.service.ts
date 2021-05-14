import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/restaurant/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StockApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all items belonging to user

  public getItems(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-stock/stock-item?account=" + sessionStorage.getItem('restaurant_id'));
  }

  public postItem(item): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-stock/stock-item/", item);
  }

  // retreive, update and delete item

  public getSingleItem(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-stock/stock-item/" + sessionStorage.getItem('stock_item_id'));
  }

  public putItem(itemData): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-stock/stock-item/" + sessionStorage.getItem('stock_item_id'), itemData);
  }

  public deleteItem(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-stock/stock-item/" + sessionStorage.getItem('stock_item_id'));
  }

}

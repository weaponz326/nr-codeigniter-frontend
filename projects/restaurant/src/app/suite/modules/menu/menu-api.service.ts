import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/restaurant/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all menu items belonging to user

  public getMenuItems(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-menu/menu-item?account=" + sessionStorage.getItem('restaurant_id'));
  }

  public postMenuItem(item): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-menu/menu-item/", item);
  }

  // retreive, update and delete menu item

  public getSingleMenuItem(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-menu/menu-item/" + sessionStorage.getItem('menu_item_id'));
  }

  public putMenuItem(item): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-menu/menu-item/" + sessionStorage.getItem('menu_item_id'), item);
  }

  public deleteMenuItem(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-menu/menu-item/" + sessionStorage.getItem('menu_item_id'));
  }

}

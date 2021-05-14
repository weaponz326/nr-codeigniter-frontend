import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/restaurant/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TablesApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all tables belonging to account

  public getTables(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-tables/table?account=" + sessionStorage.getItem('restaurant_id'));
  }

  public postTable(menu): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-tables/table/", menu);
  }

  // retreive, update and delete table

  public getSingleTable(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-tables/table/" + sessionStorage.getItem('table_id'));
  }

  public putTable(table): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-tables/table/" + sessionStorage.getItem('table_id'), table);
  }

  public deleteTable(): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-tables/table/" + sessionStorage.getItem('table_id'));
  }

}

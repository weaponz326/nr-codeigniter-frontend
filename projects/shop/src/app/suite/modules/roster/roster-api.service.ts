import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RosterApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all roster belonging to user

  public getRoster(): Observable<any>{
    return this.http.get(this.shopUrl + "module-roster/roster?account=" + sessionStorage.getItem('shop_id'));
  }

  public postRoster(roster): Observable<any>{
    return this.http.post(this.shopUrl + "module-roster/roster/", roster);
  }

  // retreive, update and delete roster

  public getSingleRoster(): Observable<any>{
    return this.http.get(this.shopUrl + "module-roster/roster/" + sessionStorage.getItem('roster_id'));
  }

  public putRoster(roster): Observable<any>{
    return this.http.put(this.shopUrl + "module-roster/roster/" + sessionStorage.getItem('roster_id'), roster);
  }

  public deleteRoster(): Observable<any>{
    return this.http.delete(this.shopUrl + "module-roster/roster/" + sessionStorage.getItem('roster_id'));
  }

}

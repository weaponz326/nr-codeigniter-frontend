import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/shop/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // get all profile categories

  public getProfile(): Observable<any>{
    return this.http.get(this.shopUrl + "module-settings/profile/" + localStorage.getItem('shop_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.shopUrl + "module-settings/extended-profile/" + localStorage.getItem('shop_id'));
  }

  // send basic profile
  public putProfile(profile): Observable<any>{
    return this.http.put(this.shopUrl + "module-settings/profile/" + localStorage.getItem('shop_id'), profile);
  }

  // send extended profile

  public postLocationProfile(location): Observable<any>{
    return this.http.post(this.shopUrl + "module-settings/location-extended/", location);
  }

  public postContactProfile(contact): Observable<any>{
    return this.http.post(this.shopUrl + "module-settings/contact-extended/", contact);
  }

}

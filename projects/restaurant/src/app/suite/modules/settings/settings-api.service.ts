import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  public getProfile(): Observable<any>{
    return this.http.get(this.restaurantUrl + "accounts/profile/" + sessionStorage.getItem('restaurant_id'));
  }

  public putProfile(profile): Observable<any>{
    return this.http.put(this.restaurantUrl + "accounts/profile/" + sessionStorage.getItem('restaurant_id'), profile);
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-settings/extended-profile/" + sessionStorage.getItem('restaurant_id'));
  }

  public postExtendedProfile(data): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-settings/extended-profile/", data);
  }

  // biliing

  public getSubscription(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-settings/subscription-detail/" + sessionStorage.getItem('restaurant_id'));
  }

  public postSubscription(data): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-settings/subscription/", data);
  }

}

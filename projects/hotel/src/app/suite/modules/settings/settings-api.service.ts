import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/hotel/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(private http: HttpClient) { }

  hotelUrl = environment.hotelUrl;

  // get all profile categories

  public getProfile(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-settings/profile/" + localStorage.getItem('hotel_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-settings/extended-profile/" + localStorage.getItem('hotel_id'));
  }

  // send basic profile
  public putProfile(profile): Observable<any>{
    return this.http.put(this.hotelUrl + "module-settings/profile/" + localStorage.getItem('hotel_id'), profile);
  }

  // send extended profile

  public postLocationProfile(location): Observable<any>{
    return this.http.post(this.hotelUrl + "module-settings/location-extended/", location);
  }

  public postContactProfile(contact): Observable<any>{
    return this.http.post(this.hotelUrl + "module-settings/contact-extended/", contact);
  }

}

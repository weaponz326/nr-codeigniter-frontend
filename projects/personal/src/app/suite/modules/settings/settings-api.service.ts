import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(private http: HttpClient) { }

  personalUrl = environment.personalUrl;

  // get all profile categories

  public getUser(): Observable<any>{
    return this.http.get(this.personalUrl + "module-settings/user/" + localStorage.getItem('personal_id'));
  }

  public getProfile(): Observable<any>{
    return this.http.get(this.personalUrl + "module-settings/profile/" + localStorage.getItem('personal_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.personalUrl + "module-settings/extended-profile/" + localStorage.getItem('personal_id'));
  }

  // send basic profile
  // both user and profile sent at the same time

  public putUser(user): Observable<any>{
    return this.http.put(this.personalUrl + "module-settings/user/" + localStorage.getItem('personal_id'), user);
  }

  public putProfile(profile): Observable<any>{
    return this.http.put(this.personalUrl + "module-settings/profile/" + localStorage.getItem('personal_id'), profile);
  }

  // send extended profile

  public postAdditionalProfile(additional): Observable<any>{
    return this.http.post(this.personalUrl + "module-settings/additional-extended/", additional);
  }

  public postLocationProfile(location): Observable<any>{
    return this.http.post(this.personalUrl + "module-settings/location-extended/", location);
  }

  public postContactProfile(contact): Observable<any>{
    return this.http.post(this.personalUrl + "module-settings/contact-extended/", contact);
  }

}

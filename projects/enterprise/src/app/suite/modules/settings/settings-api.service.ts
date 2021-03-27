import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/enterprise/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // get all profile categories

  public getProfile(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-settings/profile/" + localStorage.getItem('enterprise_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-settings/extended-profile/" + localStorage.getItem('enterprise_id'));
  }

  // send basic profile
  public putProfile(profile): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-settings/profile/" + localStorage.getItem('enterprise_id'), profile);
  }

  // send extended profile

  public postLocationProfile(location): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-settings/location-extended/", location);
  }

  public postContactProfile(contact): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-settings/contact-extended/", contact);
  }

}

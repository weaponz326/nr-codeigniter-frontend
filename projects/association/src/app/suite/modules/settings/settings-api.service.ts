import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/association/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(private http: HttpClient) { }

  associationUrl = environment.associationUrl;

  // get all profile categories

  public getProfile(): Observable<any>{
    return this.http.get(this.associationUrl + "module-settings/profile/" + localStorage.getItem('association_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.associationUrl + "module-settings/extended-profile/" + localStorage.getItem('association_id'));
  }

  // send basic profile
  public putProfile(profile): Observable<any>{
    return this.http.put(this.associationUrl + "module-settings/profile/" + localStorage.getItem('association_id'), profile);
  }

  // send extended profile

  public postLocationProfile(location): Observable<any>{
    return this.http.post(this.associationUrl + "module-settings/location-extended/", location);
  }

  public postContactProfile(contact): Observable<any>{
    return this.http.post(this.associationUrl + "module-settings/contact-extended/", contact);
  }

}

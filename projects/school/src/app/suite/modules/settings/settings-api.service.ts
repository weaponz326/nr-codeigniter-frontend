import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/school/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // get all profile categories

  public getProfile(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-settings/profile/" + localStorage.getItem('school_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-settings/extended-profile/" + localStorage.getItem('school_id'));
  }

  // send basic profile
  public putProfile(profile): Observable<any>{
    return this.http.put(this.schoolUrl + "module-settings/profile/" + localStorage.getItem('school_id'), profile);
  }

  // send extended profile

  public postLocationProfile(location): Observable<any>{
    return this.http.post(this.schoolUrl + "module-settings/location-extended/", location);
  }

  public postContactProfile(contact): Observable<any>{
    return this.http.post(this.schoolUrl + "module-settings/contact-extended/", contact);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/hospital/src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // get all profile categories

  public getProfile(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-settings/profile/" + localStorage.getItem('hospital_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-settings/extended-profile/" + localStorage.getItem('hospital_id'));
  }

  // send basic profile
  public putProfile(profile): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-settings/profile/" + localStorage.getItem('hospital_id'), profile);
  }

  // send extended profile

  public postLocationProfile(location): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-settings/location-extended/", location);
  }

  public postContactProfile(contact): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-settings/contact-extended/", contact);
  }

}

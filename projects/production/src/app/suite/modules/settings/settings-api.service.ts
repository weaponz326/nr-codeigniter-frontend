import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/production/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  constructor(private http: HttpClient) { }

  productionUrl = environment.productionUrl;

  // get all profile categories

  public getProfile(): Observable<any>{
    return this.http.get(this.productionUrl + "module-settings/profile/" + localStorage.getItem('production_id'));
  }

  public getExtendedProfile(): Observable<any>{
    return this.http.get(this.productionUrl + "module-settings/extended-profile/" + localStorage.getItem('production_id'));
  }

  // send basic profile
  public putProfile(profile): Observable<any>{
    return this.http.put(this.productionUrl + "module-settings/profile/" + localStorage.getItem('production_id'), profile);
  }

  // send extended profile

  public postLocationProfile(location): Observable<any>{
    return this.http.post(this.productionUrl + "module-settings/location-extended/", location);
  }

  public postContactProfile(contact): Observable<any>{
    return this.http.post(this.productionUrl + "module-settings/contact-extended/", contact);
  }

}

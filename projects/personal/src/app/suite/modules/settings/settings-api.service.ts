import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  personalUrl = environment.personalUrl;

  constructor(private http: HttpClient) { }

  // get all profile categories

  public getBasicProfile(): Observable<any>{
    return this.http.get(this.personalUrl + "module-settings/profile-user/" + localStorage.getItem('personal_id'));
  }

  public getAdditionalProfile(): Observable<any>{
    return this.http.get(this.personalUrl + "module-settings/additional-profile/" + localStorage.getItem('personal_id'));
  }

  public getLocationDetails(): Observable<any>{
    return this.http.get(this.personalUrl + "module-settings/location-details/" + localStorage.getItem('personal_id'));
  }

  // send all profile categories

  public putProfile(profile): Observable<any>{
    return this.http.put(this.personalUrl + "module-settings/profile/" + localStorage.getItem('personal_id'), profile);
  }

  public putUser(user): Observable<any>{
    return this.http.put(this.personalUrl + "module-settings/user/" + localStorage.getItem('personal_id'), user);
  }

  public postAdditionalProfile(additionalProfile): Observable<any>{
    return this.http.post(this.personalUrl + "module-settings/additional-profile/", additionalProfile);
  }

  public postLocationDetails(locationDetails): Observable<any>{
    return this.http.post(this.personalUrl + "module-settings/location-details/", locationDetails);
  }


}

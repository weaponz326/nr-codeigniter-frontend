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

  // settings profile

  // send new setings profile
  public postSettingsProfile(profile): Observable<any>{
    return this.http.post(this.personalUrl + "module-settings/settings-profile/", profile);
  }

  public getSettingsProifle(): Observable<any>{
    return this.http.get(this.personalUrl + "module-settings/settings-profile?user=" + localStorage.getItem('personal_id'));
  }

  // update settings profile
  public putSettingsProfile(profile): Observable<any>{
    return this.http.put(this.personalUrl + "module-settings/settings-profile/" + localStorage.getItem('personal_id'), profile);
  }

  // user profile

  public getUserProifle(): Observable<any>{
    return this.http.get(this.personalUrl + "module-settings/user-profile?user=" + localStorage.getItem('personal_id'));
  }

  public putUserProfile(profile): Observable<any>{
    return this.http.put(this.personalUrl + "module-settings/user-profile/" + localStorage.getItem('personal_id'), profile);
  }

}

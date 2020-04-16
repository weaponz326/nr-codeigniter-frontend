// service for personal user all personal user signup api

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SignupApiService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  // send user profile form  
  public sendProfile(userProile): Observable<any>{
    return this.http.post(this.baseUrl + "send_profile", userProile);
  }

  // send user account form
  public sendAccount(userAccount): Observable<any>{
    return this.http.post(this.baseUrl + "send_account", userAccount);
  }

  // long polling for verification status
  public pollVerstatus(): Observable<any>{
    return this.http.get(this.baseUrl + "poll_verstatus");
  }

  // get user registration source
  public getSource(): Observable<any>{
    return this.http.get(this.baseUrl + "get_source");
  }

  // send verification mail form
  public sendVerForm(verForm): Observable<any>{
    return this.http.post(this.baseUrl + "send_ver_form", verForm);
  }

}

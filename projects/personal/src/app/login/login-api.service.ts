import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  // send login form
  public sendLogin(loginForm): Observable<any>{
    return this.http.post(this.baseUrl + "send_login", loginForm);
  }

  // get user login source
  public getSource(): Observable<any>{
    return this.http.get(this.baseUrl + "get_source");
  }

  // send account recovery mail
  public sendRecForm(recForm): Observable<any>{
    return this.http.post(this.baseUrl + "send_rec_form", recForm);
  }

  // long polling for recovery mail verification status 
  public pollVerstatus(): Observable<any>{
    return this.http.get(this.baseUrl + "poll_verstatus");
  }

  // send password reset form  
  public sendReset(resetForm): Observable<any>{
    return this.http.post(this.baseUrl + "send_reset", resetForm);
  }

}

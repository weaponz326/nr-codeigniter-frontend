import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) { }

  personalUrl = environment.personalUrl;

  // send login form
  public postLogin(loginForm): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/login/", loginForm);
  }

  // send account recovery mail
  public postRecoveryEmail(email): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/password/reset/", email);
  }

  // *** have to be changed
  // long polling for recovery mail verification status
  public pollVerstatus(): Observable<any>{
    return this.http.get(this.personalUrl + "poll_verstatus");
  }

  // send password reset form
  public sendReset(resetForm): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/password/reset/confirm/", resetForm);
  }

}

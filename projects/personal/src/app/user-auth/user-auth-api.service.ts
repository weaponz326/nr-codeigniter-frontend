import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UserAuthApiService {

  constructor(private http: HttpClient) { }

  personalUrl = environment.personalUrl;

  // send user account form
  public postSignup(signupForm): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/registration/", signupForm);
  }

  // send user profile form
  public postRegister(regsiterForm): Observable<any>{
    return this.http.post(this.personalUrl + "users/user-profile/", regsiterForm);
  }

  // send login form
  public postLogin(loginForm): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/login/", loginForm);
  }

  // send account recovery mail
  public postRecoveryEmail(email): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/password/reset/", email);
  }

  // send password reset form
  public sendReset(resetForm): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/password/reset/confirm/", resetForm);
  }

}

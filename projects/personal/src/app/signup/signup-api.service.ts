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

  personalUrl = environment.personalUrl;

  // send user profile form
  public postProfile(userProfile): Observable<any>{
    return this.http.post(this.personalUrl + "users/profile-store/", userProfile, { withCredentials: true });
  }

  // send user account form
  public postAccount(userAccount): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/registration/", userAccount, { withCredentials: true });
  }

  // long polling for verification status
  public pollVerification(): Observable<any>{
    return this.http.get(this.personalUrl + "users/poll_verification/");
  }

  // send verification mail form
  public postVerificationEmail(email): Observable<any>{
    return this.http.post(this.personalUrl + "users/verification-email/", email);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // send profile form
  public postProfile(profileForm): Observable<any>{
    return this.http.post(this.shopUrl + "accounts/new-profile/", profileForm);
  }

}

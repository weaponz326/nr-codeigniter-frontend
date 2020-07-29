import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  // send profile form
  public postProfile(profileForm): Observable<any>{
    return this.http.post(this.restaurantUrl + "accounts/new-profile/", profileForm);
  }

}

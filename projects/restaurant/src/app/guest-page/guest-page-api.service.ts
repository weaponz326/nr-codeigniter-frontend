import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class GuestPageApiService {

  restaurantUrl = environment.restaurantUrl;

  constructor(private http: HttpClient) { }

  // check whether user has a hospital account
  public hasAccount(): Observable<any>{
    console.log(localStorage.getItem('personal_id'));
    return this.http.post(this.restaurantUrl + "accounts/has-account/", { personal_id: localStorage.getItem('personal_id') });
  }

}

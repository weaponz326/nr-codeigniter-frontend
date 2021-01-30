import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class GuestPageApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // check whether user has a hospital account
  public hasAccount(): Observable<any>{
    console.log(localStorage.getItem('personal_id'));
    return this.http.post(this.shopUrl + "accounts/has-account/", { personal_id: localStorage.getItem('personal_id') });
  }

}

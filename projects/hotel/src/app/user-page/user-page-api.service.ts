import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UserPageApiService {

  hotelUrl = environment.hotelUrl;

  constructor(private http: HttpClient) { }

  // get user's hospital accounts
  public getAccounts(): Observable<any>{
    return this.http.get(this.hotelUrl + "accounts/user-accounts?personal_id=" + localStorage.getItem('personal_id'));
  }

  // send selected account id
  public postAccount(accountId): Observable<any>{
    return this.http.post(this.hotelUrl + "accounts/active-account", { active_account: accountId });
  }

}

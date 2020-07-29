import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UserPageApiService {

  shopUrl = environment.shopUrl;

  constructor(private http: HttpClient) { }

  // get user's hospital accounts
  public getAccounts(): Observable<any>{
    return this.http.get(this.shopUrl + "accounts/user-accounts?personal_id=" + localStorage.getItem('personal_id'));
  }

  // send selected account id
  public postAccount(accountId): Observable<any>{
    return this.http.post(this.shopUrl + "accounts/active-account", { active_account: accountId });
  }

}

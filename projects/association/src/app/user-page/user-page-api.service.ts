import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UserPageApiService {

  constructor(private http: HttpClient) { }

  associationUrl = environment.associationUrl;

  // get user's hospital accounts
  public getAccounts(): Observable<any>{
    return this.http.get(this.associationUrl + "accounts/user-accounts?personal_id=" + localStorage.getItem('personal_id'), { withCredentials: true });
  }

  // send selected account id
  public postAccount(accountId): Observable<any>{
    return this.http.post(this.associationUrl + "accounts/active-account/", { active_account: accountId }, { withCredentials: true });
  }

}

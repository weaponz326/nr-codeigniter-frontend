import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountsApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all accounts belonging to user

  public getAccounts(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-accounts/account?user=" + sessionStorage.getItem('enterprise_id'));
  }

  public postAccount(account): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-accounts/account/", account);
  }

  // retreive, update and delete account

  public getSingleAccount(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-accounts/account/" + sessionStorage.getItem('account_id'));
  }

  public putAccount(account): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-accounts/account/" + sessionStorage.getItem('account_id'), account);
  }

  public deleteAccount(): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-accounts/account/" + sessionStorage.getItem('account_id'));
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // transactions

  public getTransactions(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-accounts/transaction?account=" + sessionStorage.getItem('account_id'));
  }

  public postTransaction(transactionData): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-accounts/transaction/", transactionData);
  }

  public putTransaction(transactionId, transactionData): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-accounts/transaction/" + transactionId, transactionData);
  }

  public deleteTransaction(transactionId): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-accounts/transaction/" + transactionId);
  }

  // all transactions belonging to a user
  public getAllTransactions(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-accounts/all-transactions?user=" + sessionStorage.getItem('enterprise_id'));
  }

}

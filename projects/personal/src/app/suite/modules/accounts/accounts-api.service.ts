import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class AccountsApiService {

  constructor(private http: HttpClient) { }

  personalUrl = environment.personalUrl;

  // create and get all accounts belonging to user

  public getAccounts(): Observable<any>{
    return this.http.get(this.personalUrl + "module-accounts/account-list?user=" + localStorage.getItem('personal_id'));
  }

  public postAccount(account): Observable<any>{
    return this.http.post(this.personalUrl + "module-accounts/account/", account);
  }

  // retreive, update and delete account

  public getSingleAccount(): Observable<any>{
    return this.http.get(this.personalUrl + "module-accounts/account/" + sessionStorage.getItem('account_id'));
  }

  public putAccount(account): Observable<any>{
    return this.http.put(this.personalUrl + "module-accounts/account/" + sessionStorage.getItem('account_id'), account);
  }

  public deleteAccount(): Observable<any>{
    return this.http.delete(this.personalUrl + "module-accounts/account/" + sessionStorage.getItem('account_id'));
  }

  // transactions

  public getTransactions(): Observable<any>{
    return this.http.get(this.personalUrl + "module-accounts/transaction-list?account=" + sessionStorage.getItem('account_id'));
  }

  public postTransaction(transactionData): Observable<any>{
    return this.http.post(this.personalUrl + "module-accounts/transaction/", transactionData);
  }

  public putTransaction(transactionId, transactionData): Observable<any>{
    return this.http.put(this.personalUrl + "module-accounts/transaction/" + transactionId, transactionData);
  }

  public deleteTransaction(transactionId): Observable<any>{
    return this.http.delete(this.personalUrl + "module-accounts/transaction/" + transactionId);
  }

  // all transactions belonging to a user
  public getAllTransactions(): Observable<any>{
    return this.http.get(this.personalUrl + "module-accounts/all-transaction?user=" + localStorage.getItem('personal_id'));
  }

}

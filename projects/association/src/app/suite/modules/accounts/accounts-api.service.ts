import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/association/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountsApiService {

  constructor(private http: HttpClient) { }

  associationUrl = environment.associationUrl;

  // create and get all accounts belonging to user

  public getAccounts(): Observable<any>{
    return this.http.get(this.associationUrl + "module-accounts/account?user=" + sessionStorage.getItem('association_id'));
  }

  public postAccount(account): Observable<any>{
    return this.http.post(this.associationUrl + "module-accounts/account/", account);
  }

  // retreive, update and delete account

  public getSingleAccount(): Observable<any>{
    return this.http.get(this.associationUrl + "module-accounts/account/" + sessionStorage.getItem('account_id'));
  }

  public putAccount(account): Observable<any>{
    return this.http.put(this.associationUrl + "module-accounts/account/" + sessionStorage.getItem('account_id'), account);
  }

  public deleteAccount(): Observable<any>{
    return this.http.delete(this.associationUrl + "module-accounts/account/" + sessionStorage.getItem('account_id'));
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // transactions

  public getTransactions(): Observable<any>{
    return this.http.get(this.associationUrl + "module-accounts/transaction?account=" + sessionStorage.getItem('account_id'));
  }

  public postTransaction(transactionData): Observable<any>{
    return this.http.post(this.associationUrl + "module-accounts/transaction/", transactionData);
  }

  public putTransaction(transactionId, transactionData): Observable<any>{
    return this.http.put(this.associationUrl + "module-accounts/transaction/" + transactionId, transactionData);
  }

  public deleteTransaction(transactionId): Observable<any>{
    return this.http.delete(this.associationUrl + "module-accounts/transaction/" + transactionId);
  }

  // all transactions belonging to a user
  public getAllTransactions(): Observable<any>{
    return this.http.get(this.associationUrl + "module-accounts/all-transactions?user=" + sessionStorage.getItem('association_id'));
  }

}

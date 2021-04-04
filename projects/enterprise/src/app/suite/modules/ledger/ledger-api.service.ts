import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LedgerApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all ledger belonging to user

  public getAllLedger(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-ledger/ledger-list?user=" + sessionStorage.getItem('enterprise_id'));
  }

  public postLedger(ledger): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-ledger/ledger/", ledger);
  }

  // retreive, update and delete ledger

  public getSingleLedger(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-ledger/ledger/" + sessionStorage.getItem('ledger_id'));
  }

  public putLedger(ledger): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-ledger/ledger/" + sessionStorage.getItem('ledger_id'), ledger);
  }

  public deleteLedger(): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-ledger/ledger/" + sessionStorage.getItem('ledger_id'));
  }

  // transactions

  public getTransactions(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-ledger/transaction-list?ledger=" + sessionStorage.getItem('ledger_id'));
  }

  public postTransaction(transactionData): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-ledger/transaction/", transactionData);
  }

  public putTransaction(transactionId, transactionData): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-ledger/transaction/" + transactionId, transactionData);
  }

  public deleteTransaction(transactionId): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-ledger/transaction/" + transactionId);
  }

}

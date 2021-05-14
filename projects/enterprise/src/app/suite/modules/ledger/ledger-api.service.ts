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

  // create and get all ledger belonging to account

  public getAllLedger(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-ledger/ledger?account=" + sessionStorage.getItem('enterprise_id'));
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

  // items

  public getItems(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-ledger/ledger-item?ledger=" + sessionStorage.getItem('ledger_id'));
  }

  public postItem(itemData): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-ledger/ledger-item/", itemData);
  }

  public putItem(itemId, itemData): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-ledger/ledger-item/" + itemId, itemData);
  }

  public deleteItem(itemId): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-ledger/ledger-item/" + itemId);
  }

}

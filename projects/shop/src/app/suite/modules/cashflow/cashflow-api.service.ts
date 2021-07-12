import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CashflowApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all sheets belonging to user

  public getAllSheets(): Observable<any>{
    return this.http.get(this.shopUrl + "module-cashflow/sheet?account=" + sessionStorage.getItem('shop_id'));
  }

  public postSheet(sheet): Observable<any>{
    return this.http.post(this.shopUrl + "module-cashflow/sheet/", sheet);
  }

  // retreive, update and delete sheet

  public getSingleSheet(): Observable<any>{
    return this.http.get(this.shopUrl + "module-cashflow/sheet/" + sessionStorage.getItem('cashflow_id'));
  }

  public putSheet(sheet): Observable<any>{
    return this.http.put(this.shopUrl + "module-cashflow/sheet/" + sessionStorage.getItem('cashflow_id'), sheet);
  }

  public deleteSheet(): Observable<any>{
    return this.http.delete(this.shopUrl + "module-cashflow/sheet/" + sessionStorage.getItem('cashflow_id'));
  }

  // ------------------------------------------------------------------------------------------------------------------
  // inflow and outflow sheets

  // daily sheet

  public getDailyInflows(): Observable<any>{
    return this.http.get(this.shopUrl + "module-cashflow/daily-inflow?cashflow=" + sessionStorage.getItem('cashflow_id'));
  }

  public getDailyOutflows(): Observable<any>{
    return this.http.get(this.shopUrl + "module-cashflow/daily-outflow?cashflow=" + sessionStorage.getItem('cashflow_id'));
  }

  public postDailyInflow(item): Observable<any>{
    return this.http.post(this.shopUrl + "module-cashflow/daily-inflow/", item);
  }

  public postDailyOutflow(item): Observable<any>{
    return this.http.post(this.shopUrl + "module-cashflow/daily-outflow/", item);
  }

  // weekly sheet

  public getWeeklyInflows(): Observable<any>{
    return this.http.get(this.shopUrl + "module-cashflow/weekly-inflow?cashflow=" + sessionStorage.getItem('cashflow_id'));
  }

  public getWeeklyOutflows(): Observable<any>{
    return this.http.get(this.shopUrl + "module-cashflow/weekly-outflow?cashflow=" + sessionStorage.getItem('cashflow_id'));
  }

  public postWeeklyInflow(item): Observable<any>{
    return this.http.post(this.shopUrl + "module-cashflow/weekly-inflow/", item);
  }

  public postWeeklyOutflow(item): Observable<any>{
    return this.http.post(this.shopUrl + "module-cashflow/weekly-outflow/", item);
  }

  // monthly sheet

  public getMonthlyInflows(): Observable<any>{
    return this.http.get(this.shopUrl + "module-cashflow/monthly-inflow?cashflow=" + sessionStorage.getItem('cashflow_id'));
  }

  public getMonthlyOutflows(): Observable<any>{
    return this.http.get(this.shopUrl + "module-cashflow/monthly-outflow?cashflow=" + sessionStorage.getItem('cashflow_id'));
  }

  public postMonthlyInflow(item): Observable<any>{
    return this.http.post(this.shopUrl + "module-cashflow/monthly-inflow/", item);
  }

  public postMonthlyOutflow(item): Observable<any>{
    return this.http.post(this.shopUrl + "module-cashflow/monthly-outflow/", item);
  }

  // quarterly sheet

  public getQuarterlyInflows(): Observable<any>{
    return this.http.get(this.shopUrl + "module-cashflow/quarterly-inflow?cashflow=" + sessionStorage.getItem('cashflow_id'));
  }

  public getQuarterlyOutflows(): Observable<any>{
    return this.http.get(this.shopUrl + "module-cashflow/quarterly-outflow?cashflow=" + sessionStorage.getItem('cashflow_id'));
  }

  public postQuarterlyInflow(item): Observable<any>{
    return this.http.post(this.shopUrl + "module-cashflow/quarterly-inflow/", item);
  }

  public postQuarterlyOutflow(item): Observable<any>{
    return this.http.post(this.shopUrl + "module-cashflow/quarterly-outflow/", item);
  }

}

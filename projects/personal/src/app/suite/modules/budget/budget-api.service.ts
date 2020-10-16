import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/personal/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BudgetApiService {

  personalUrl = environment.personalUrl;

  constructor(private http: HttpClient) { }

  // get all budgets belonging to a user
  public getBudgets(): Observable<any>{
    return this.http.get(this.personalUrl + "module-budget/budget-list?user=" + localStorage.getItem('personal_id'));
  }

  // create new budget
  public postBudget(budget: any): Observable<any>{
    return this.http.post(this.personalUrl + "module-budget/budget/", budget);
  }

  // retreive, update and delete budget

  public getSingleBudget(): Observable<any>{
    return this.http.get(this.personalUrl + "module-budget/budget/" + sessionStorage.getItem('budget_id'));
  }

  public putBudget(budget): Observable<any>{
    return this.http.put(this.personalUrl + "module-budget/budget/" + sessionStorage.getItem('budget_id'), budget);
  }

  public deleteBudget(): Observable<any>{
    return this.http.delete(this.personalUrl + "module-budget/budget/" + sessionStorage.getItem('budget_id'));
  }

  // get budget's income, add, update and delete income

  public getIncome(): Observable<any>{
    return this.http.get(this.personalUrl + "module-budget/income-list?budget=" + sessionStorage.getItem('budget_id'));
  }

  public postIncome(incomeData): Observable<any>{
    return this.http.post(this.personalUrl + "module-budget/income/", incomeData);
  }

  public putIncome(incomeId, incomeData): Observable<any>{
    return this.http.put(this.personalUrl + "module-budget/income/" + incomeId, incomeData);
  }

  public deleteIncome(incomeId): Observable<any>{
    return this.http.delete(this.personalUrl + "module-budget/income/" + incomeId);
  }

  // get budget's expenditure, add, update and delete expenditure

  public getExpenditure(): Observable<any>{
    return this.http.get(this.personalUrl + "module-budget/expenditure-list?budget=" + sessionStorage.getItem('budget_id'));
  }

  public postExpenditure(expenditureData): Observable<any>{
    return this.http.post(this.personalUrl + "module-budget/expenditure/", expenditureData);
  }

  public putExpenditure(expenditureId, expenditureData): Observable<any>{
    return this.http.put(this.personalUrl + "module-budget/expenditure/" + expenditureId, expenditureData);
  }

  public deleteExpenditure(expenditureId): Observable<any>{
    return this.http.delete(this.personalUrl + "module-budget/expenditure/" + expenditureId);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetCalcService {

  constructor() { }

  calculateIoe(totalIncome, totalExpenditure){
    if (!totalIncome) totalIncome = 0;
    if (!totalExpenditure) totalExpenditure = 0;
    console.log(totalIncome);
    console.log(totalExpenditure);

    let ioe = totalIncome - totalExpenditure;

    return ioe;
  }

}

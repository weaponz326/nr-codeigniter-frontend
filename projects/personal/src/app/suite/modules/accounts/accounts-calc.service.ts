import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsCalcService {

  constructor() { }

  reformatData(data){
    let transactionData;

    if (data.transaction_type == "Credit"){
      transactionData = {
        transaction_date: data.transaction_date,
        transaction_type: data.transaction_type,
        description: data.description,
        amount: Math.abs(data.amount),
      }
    }else if (data.transaction_type == "Debit"){
      transactionData = {
        transaction_date: data.transaction_date,
        transaction_type: data.transaction_type,
        description: data.description,
        amount: ~(Math.abs(data.amount)) + 1,
      }
    }

    return transactionData;
  }

  calculateTotalBalance(){

  }

}

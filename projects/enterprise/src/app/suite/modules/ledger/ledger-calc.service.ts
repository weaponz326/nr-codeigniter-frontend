import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LedgerCalcService {

  constructor() { }

  reformatData(itemData, gridData){
    let outputData;
    let balance = this.getBalance(gridData);

    if (itemData.item_type == "Credit"){
      outputData = {
        item_date: itemData.item_date,
        reference_number: itemData.reference_number,
        description: itemData.description,
        item_type: itemData.item_type,
        credit: Math.abs(itemData.amount),
        balance: balance + itemData.amount,
      }
    }else if (itemData.item_type == "Debit"){
      outputData = {
        item_date: itemData.item_date,
        reference_number: itemData.reference_number,
        description: itemData.description,
        item_type: itemData.item_type,
        debit: Math.abs(itemData.amount),
        balance: balance - itemData.amount,
      }
    }

    return outputData;
  }

  getBalance(grid) {
    if (grid.legnth == 0) {
      return 0
    }

    return 0;
  }

}

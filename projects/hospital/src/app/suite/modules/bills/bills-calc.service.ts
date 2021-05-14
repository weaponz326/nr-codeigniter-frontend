import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillsCalcService {

  constructor() { }

  totalBill(allBills: any){
    let total = 0;
    for (let i = 0; i < allBills.length; i++){
      if (Object.keys(allBills[i]).length != 0) {
        total = total + allBills[i].sum;
        console.log(allBills[i]);
        console.log(total);
      }
    }

    return total;
  }
}

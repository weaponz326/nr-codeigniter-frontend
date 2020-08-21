import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { BudgetApiService } from '../budget-api.service';


@Component({
  selector: 'app-budget-tables',
  templateUrl: './budget-tables.component.html',
  styleUrls: ['./budget-tables.component.css']
})
export class BudgetTablesComponent implements OnInit, AfterViewInit {

  @ViewChild("incomeGridReference") incomeGrid: jqxGridComponent;
  @ViewChild("expenditureGridReference") expenditureGrid: jqxGridComponent;

  constructor(private budgetApi: BudgetApiService) { }

  getIncomeData(){
    this.budgetApi.getIncome()
      .subscribe(
        res => {
          console.log(res);
          this.incomeSource.localdata = res;
          this.incomeGrid.updatebounddata();
        },
        err => {
          console.log(err);
        }
      )
  }

  getExpenditureData(){
    this.budgetApi.getExpenditure()
      .subscribe(
        res => {
          console.log(res);
          this.expenditureSource.localdata = res;
          this.expenditureGrid.updatebounddata();
        },
        err => {
          console.log(err);
        }
      )
  }

  addIncomeRow(rowid, rowdata, position, commit) {
    let incomeData = {
      budget: sessionStorage.getItem('budget_id'),
      item: rowdata.item,
      amount: rowdata.amount,
    }

    this.budgetApi.postIncome(incomeData)
      .subscribe(
        res => {
          console.log(res);
          commit(true);
        },
        err => {
          console.log(err);
        }
      )
  }

  updateIncomeRow(rowid, newdata, commit) {
    let incomeData = {
      budget: sessionStorage.getItem('budget_id'),
      item: newdata.item,
      amount: newdata.amount
    }

    this.budgetApi.putIncome(rowid, incomeData)
      .subscribe(
        res => {
          console.log(res);
          commit(true);
        },
        err => {
          console.log(err);
        }
      )
  }

  deleteIncomeRow(rowid, commit) {
    this.budgetApi.deleteIncome(rowid)
      .subscribe(
        res => {
          console.log(res);
          commit(true);
        },
        err => {
          console.log(err);
        }
      )
  }

  addExpenditureRow(rowid, rowdata, position, commit) {
    let expenditureData = {
      budget: sessionStorage.getItem('budget_id'),
      item: rowdata.item,
      amount: rowdata.amount,
    }

    this.budgetApi.postExpenditure(expenditureData)
      .subscribe(
        res => {
          console.log(res);
          commit(true);
        },
        err => {
          console.log(err);
        }
      )
  }

  updateExpenditureRow(rowid, newdata, commit) {
    let expenditureData = {
      budget: sessionStorage.getItem('budget_id'),
      item: newdata.item,
      amount: newdata.amount,
    }

    this.budgetApi.putExpenditure(rowid, expenditureData)
      .subscribe(
        res => {
          console.log(res);
          commit(true);
        },
        err => {
          console.log(err);
        }
      )
  }

  deleteExpenditureRow(rowid, commit) {
    this.budgetApi.deleteExpenditure(rowid)
      .subscribe(
        res => {
          console.log(res);
          commit(true);
        },
        err => {
          console.log(err);
        }
      )
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.incomeGrid.showloadelement();
    this.getIncomeData();

    this.expenditureGrid.showloadelement();
    this.getExpenditureData();
  }

  // widgets
  // --------------------------------------------------------------------------------------------

  // income grid settings

  incomeSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'item', type: 'string' },
      { name: 'amount', type: 'string' }
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addIncomeRow(rowid, rowdata, position, commit);
    },
    updaterow: (rowid, newdata, commit) => {
      this.updateIncomeRow(rowid, newdata, commit);
    },
    deleterow: (rowid, commit) => {
      this.deleteIncomeRow(rowid, commit);
    }
  }

  incomeDataAdapter: any = new jqx.dataAdapter(this.incomeSource);

  incomeColumns: any[] = [
    { text: 'Item Description', columngroup: 'incomeGroup', dataField: 'item', width: "70%" },
    { text: 'Amount', columngroup: 'incomeGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  incomeColumnGroups: any[] = [
    { text: "Income", align: "center", name: "incomeGroup" }
  ];

  // expenditure grid settings

  expenditureSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'item', type: 'string' },
      { name: 'amount', type: 'string' }
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addExpenditureRow(rowid, rowdata, position, commit);
    },
    updaterow: (rowid, newdata, commit) => {
      this.updateExpenditureRow(rowid, newdata, commit);
    },
    deleterow: (rowid, commit) => {
      this.deleteExpenditureRow(rowid, commit);
    }
  }

  expenditureDataAdapter: any = new jqx.dataAdapter(this.expenditureSource);

  expenditureColumns: any[] = [
    { text: 'Item Description', columngroup: 'expenditureGroup', dataField: 'item', width: "70%" },
    { text: 'Amount', columngroup: 'expenditureGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  expenditureColumnGroups: any[] = [
    { text: "Expenditure", align: "center", name: "expenditureGroup" }
  ];

}

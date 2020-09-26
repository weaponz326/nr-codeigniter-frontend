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

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.incomeGrid.showloadelement();
    this.getIncomeData();

    this.expenditureGrid.showloadelement();
    this.getExpenditureData();

    this.getIncomeOverExpenditure;
  }

  getIncomeOverExpenditure() {
    let totalIncome = this.incomeGrid.getcolumnaggregateddata('amount', ['sum']);
    console.log(totalIncome);
    let totalExpenditure = this.expenditureGrid.getcolumnaggregateddata('amount', ['sum']);
    console.log(totalExpenditure);
    // let incomeOverExpenditure = totalIncome - totalExpenditure;
  }

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

  incomeAmountNumberInput;

  incomeColumns: any[] = [
    { text: 'Item Description', columngroup: 'incomeGroup', dataField: 'item', width: "70%" },
    {
      text: 'Amount', columngroup: 'incomeGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'],
      createEverPresentRowWidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): HTMLElement => {
        let container = document.createElement('div');
        container.id = 'incomeAmountNumberInput';
        container.style.border = 'none';
        htmlElement[0].appendChild(container);
        let options = {
            width: '100%', height: 30, decimalDigits: 2, inputMode: 'simple',
        };
        this.incomeAmountNumberInput = jqwidgets.createInstance('#incomeAmountNumberInput', 'jqxNumberInput', options);
        return container;
      },
      getEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement, validate: any): any => {
        let value = this.incomeAmountNumberInput.val();
        if (value == '') value = 0;
        return parseInt(value);
      },
      resetEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement): void => {
        this.incomeAmountNumberInput.val('');
      }
    },
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

  expenditureAmountNumberInput;

  expenditureColumns: any[] = [
    { text: 'Item Description', columngroup: 'expenditureGroup', dataField: 'item', width: "70%" },
    {
      text: 'Amount', columngroup: 'expenditureGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'],
      createEverPresentRowWidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): HTMLElement => {
        let container = document.createElement('div');
        container.id = 'expenditureAmountNumberInput';
        container.style.border = 'none';
        htmlElement[0].appendChild(container);
        let options = {
            width: '100%', height: 30, decimalDigits: 2, inputMode: 'simple',
        };
        this.expenditureAmountNumberInput = jqwidgets.createInstance('#expenditureAmountNumberInput', 'jqxNumberInput', options);
        return container;
      },
      getEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement, validate: any): any => {
        let value = this.expenditureAmountNumberInput.val();
        if (value == '') value = 0;
        return parseInt(value);
      },
      resetEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement): void => {
        this.expenditureAmountNumberInput.val('');
      }
    },
  ];

  expenditureColumnGroups: any[] = [
    { text: "Expenditure", align: "center", name: "expenditureGroup" }
  ];

}

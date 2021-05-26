import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { BudgetApiService } from '../budget-api.service';
import { BudgetCalcService } from '../budget-calc.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-budget-tables',
  templateUrl: './budget-tables.component.html',
  styleUrls: ['./budget-tables.component.css']
})
export class BudgetTablesComponent implements OnInit, AfterViewInit {

  constructor(
    private budgetApi: BudgetApiService,
    private budgetCalc: BudgetCalcService
  ) { }

  @ViewChild("incomeGridReference") incomeGrid: jqxGridComponent;
  @ViewChild("expenditureGridReference") expenditureGrid: jqxGridComponent;
  @ViewChild("addIncomebuttonReference") addIncomeButton: jqxButtonComponent;
  @ViewChild("addExpenditurebuttonReference") addExpenditureButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  // emit aggregate sum of income and expenditure
  @Output() calculateIoe = new EventEmitter<any>();

  totalIncome: any;
  totalExpenditure: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.incomeGrid.showloadelement();
    this.getIncomeData();

    this.expenditureGrid.showloadelement();
    this.getExpenditureData();
  }

  getIncomeData(){
    this.budgetApi.getIncome()
      .subscribe(
        res => {
          console.log(res);
          this.incomeSource.localdata = res;
          this.incomeGrid.updatebounddata();

          this.getIoe();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
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

          this.getIoe();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // emits aggregated sum back to parent after being called
  getIoe() {
    this.totalIncome = this.incomeGrid.getcolumnaggregateddata('amount', ['sum']);
    this.totalExpenditure = this.expenditureGrid.getcolumnaggregateddata('amount', ['sum']);
    console.log(this.totalIncome.sum);
    console.log(this.totalExpenditure.sum);

    let ioe = this.budgetCalc.calculateIoe(this.totalIncome.sum, this.totalExpenditure.sum);
    this.calculateIoe.emit(ioe);

    console.log(ioe)
  }

  onIncomeAddCommit(incomeData: any) {
    this.incomeGrid.addrow(null, incomeData);
  }

  onIncomeEditCommit(incomeData: any) {
    this.incomeGrid.updaterow(incomeData.id, incomeData);
  }

  onIncomeDeleteCommit(incomeId: number) {
    this.incomeGrid.deleterow(incomeId);
  }

  onExpenditureAddCommit(expenditureData: any) {
    this.expenditureGrid.addrow(null, expenditureData);
  }

  onExpenditureEditCommit(expenditureData: any) {
    this.expenditureGrid.updaterow(expenditureData.id, expenditureData);
  }

  onExpenditureDeleteCommit(expenditureId: number) {
    this.expenditureGrid.deleterow(expenditureId);
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

  expenditureAmountNumberInput;

  expenditureColumns: any[] = [
    { text: 'Item Description', columngroup: 'expenditureGroup', dataField: 'item', width: "70%" },
    { text: 'Amount', columngroup: 'expenditureGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  expenditureColumnGroups: any[] = [
    { text: "Expenditure", align: "center", name: "expenditureGroup" }
  ];

  // income CRUD

  addIncomeRow(rowid, rowdata, position, commit) {
    let incomeData = {
      budget: sessionStorage.getItem('budget_id'),
      item: rowdata.item,
      amount: rowdata.amount,
    }

    this.loadingSpinner.httpLoader.open();

    this.budgetApi.postIncome(incomeData)
      .subscribe(
        res => {
          console.log(res);
          commit(true, res.data.id);
          this.loadingSpinner.httpLoader.close();

          // recalculate ioe on table change
          this.getIoe();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  updateIncomeRow(rowid, newdata, commit) {
    let incomeData = {
      budget: sessionStorage.getItem('budget_id'),
      item: newdata.item,
      amount: newdata.amount
    }

    this.loadingSpinner.httpLoader.open();

    this.budgetApi.putIncome(rowid, incomeData)
      .subscribe(
        res => {
          console.log(res);
          commit(true, res.data.id);
          this.loadingSpinner.httpLoader.close();

          // recalculate ioe on table change
          this.getIoe();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  deleteIncomeRow(rowid, commit) {
    this.loadingSpinner.httpLoader.open();

    this.budgetApi.deleteIncome(rowid)
      .subscribe(
        res => {
          console.log(res);
          commit(true);
          this.loadingSpinner.httpLoader.close();

          // recalculate ioe on table change
          this.getIoe();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // expenditure CRUD

  addExpenditureRow(rowid, rowdata, position, commit) {
    let expenditureData = {
      budget: sessionStorage.getItem('budget_id'),
      item: rowdata.item,
      amount: rowdata.amount,
    }

    this.loadingSpinner.httpLoader.open();

    this.budgetApi.postExpenditure(expenditureData)
      .subscribe(
        res => {
          console.log(res);
          commit(true, res.data.id);
          this.loadingSpinner.httpLoader.close();

          // recalculate ioe on table change
          this.getIoe();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  updateExpenditureRow(rowid, newdata, commit) {
    let expenditureData = {
      budget: sessionStorage.getItem('budget_id'),
      item: newdata.item,
      amount: newdata.amount,
    }

    this.loadingSpinner.httpLoader.open();

    this.budgetApi.putExpenditure(rowid, expenditureData)
      .subscribe(
        res => {
          console.log(res);
          commit(true, res.data.id);
          this.loadingSpinner.httpLoader.close();

          // recalculate ioe on table change
          this.getIoe();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  deleteExpenditureRow(rowid, commit) {
    this.loadingSpinner.httpLoader.open();

    this.budgetApi.deleteExpenditure(rowid)
      .subscribe(
        res => {
          console.log(res);
          commit(true);
          this.loadingSpinner.httpLoader.close();

          // recalculate ioe on table change
          this.getIoe();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}

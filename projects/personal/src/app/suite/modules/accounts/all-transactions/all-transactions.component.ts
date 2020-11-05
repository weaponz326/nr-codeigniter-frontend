import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AccountsApiService } from '../accounts-api.service'
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent implements OnInit, AfterViewInit {

  @ViewChild("gridReference") grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  constructor(private accountsApi: AccountsApiService, public suiteRoutes: SuiteRoutesService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.accountsApi.getAllTransactions()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.grid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // widgets
  // --------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'transaction_date', type: 'string', format: 'yyyy-MM-dd HH:mm' },
      { name: 'description', type: 'string' },
      { name: 'transaction_type', type: 'string' },
      { name: 'amount', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Transaction Date", dataField: "transaction_date", filtertype: "range", width: "20%" },
    { text: "Description", dataField: "description", width: "45%" },
    { text: "Transaction Type", dataField: "transaction_type", filtertype: "checkedlist", width: "20%" },
    { text: "Amount", dataField: "amount", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

}

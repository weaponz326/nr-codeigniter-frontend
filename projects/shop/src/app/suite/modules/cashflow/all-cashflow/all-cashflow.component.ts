import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { CashflowApiService } from '../cashflow-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-cashflow',
  templateUrl: './all-cashflow.component.html',
  styleUrls: ['./all-cashflow.component.css']
})
export class AllCashflowComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private cashflowApi: CashflowApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Sheet", url: "/suite/cashflow/all-sheets" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.cashflowApi.getAllSheets()
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

  viewSheet(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('cashflow_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/cashflow/view-sheet');
  }


  // widgets
  // --------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'sheet_code', type: 'string' },
      { name: 'sheet_name', type: 'string' },
      { name: 'sheet_type', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Sheet ID", dataField: "sheet_code", width: "25%" },
    { text: "Sheet Name", dataField: "sheet_name", width: "50%" },
    { text: "Sheet Type", dataField: "sheet_type", width: "25%" },
  ];

}

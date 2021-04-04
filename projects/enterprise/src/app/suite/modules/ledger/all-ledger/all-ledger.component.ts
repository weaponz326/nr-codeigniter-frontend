import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { LedgerApiService } from '../ledger-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-ledger',
  templateUrl: './all-ledger.component.html',
  styleUrls: ['./all-ledger.component.css']
})
export class AllLedgerComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private ledgerApi: LedgerApiService,
  ) { }

  @ViewChild('newButtonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Ledger", url: "/suite/ledger/all-ledger" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.ledgerApi.getAllLedger()
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

  viewLedger(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('ledger_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/ledger/view-ledger')
  }

  // widgets
  // -----------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'ledger_code', type: 'string' },
      { name: 'ledger_name', type: 'string' },
      { name: 'from_date', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Ledger ID", dataField: "ledger_code", width: "25%" },
    { text: "Ledger Name", dataField: "ledger_name", width: "50%" },
    { text: "From Date", dataField: "from_date", width: "25%" },
  ]

}

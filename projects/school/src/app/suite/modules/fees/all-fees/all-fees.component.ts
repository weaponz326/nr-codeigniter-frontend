import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { FeesApiService } from '../fees-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-fees',
  templateUrl: './all-fees.component.html',
  styleUrls: ['./all-fees.component.css']
})
export class AllFeesComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private feesApi: FeesApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "Generate Fees", url: "/suite/fees/all-fees" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    // this.feesApi.getFees()
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.source.localdata = res;
    //       this.grid.updatebounddata();
    //     },
    //     err => {
    //       console.log(err);
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }

  viewFee(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('fee_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/fees/view-fee');
  }

  // widgets
  // -------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'fee_code', type: 'string' },
      { name: 'fee_description', type: 'string' },
      { name: 'fees_date', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Fees ID", dataField: "fees_code", width: "25%" },
    { text: "Fees Description", dataField: "fees_description", width: "50%" },
    { text: "Fees Date", dataField: "fees_date", filtertype: "range", width: "25%" },
  ];

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ReportsApiService } from '../reports-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.css']
})
export class AllReportsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private reportsApi: ReportsApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Reports", url: "/suite/reports/all-reports" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.reportsApi.getReports()
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

  viewReport(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('report_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/reports/class-report');
  }

  // widgets
  // ------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'report_code', type: 'string' },
      { name: 'report_name', type: 'string' },
      { name: 'report_date', type: 'string' },
      { name: 'term_name', map: 'term>term_name', type: 'string' },
      { name: 'class_name', map: 'clas>class_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Report ID", dataField: "report_code", width: "10%" },
    { text: "Report Name", dataField: "report_name", width: "33%" },
    { text: "Report Date", dataField: "report_date", filtertype: "range", width: "12%" },
    { text: "Term", dataField: "term_name", width: "20%" },
    { text: "Class", dataField: "class_name", width: "25%" },
  ];

}

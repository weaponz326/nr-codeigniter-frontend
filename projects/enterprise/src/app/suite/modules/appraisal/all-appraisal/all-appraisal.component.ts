import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AppraisalApiService } from '../appraisal-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-appraisal',
  templateUrl: './all-appraisal.component.html',
  styleUrls: ['./all-appraisal.component.css']
})
export class AllAppraisalComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private appraisalApi: AppraisalApiService,
  ) { }

  @ViewChild('newButtonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Appraisal", url: "/suite/appraisal/all-appraisal" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.appraisalApi.getAllAppraisal()
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

  viewAppraisal(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('appraisal_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/appraisal/appraisal-employees')
  }

  // widgets
  // ---------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'appraisal_code', type: 'string' },
      { name: 'appraisal_name', type: 'string' },
      { name: 'start_date', type: 'string' },
      { name: 'end_date', type: 'string' },
      { name: 'supervisor', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Appraisal ID", dataField: "appraisal_code", width: "15%" },
    { text: "Appraisal Name", dataField: "appraisal_name", width: "30%" },
    { text: "Start Date", dataField: "start_date", filtertype: "range", width: "15%" },
    { text: "End Date", dataField: "end_date", filtertype: "range", width: "15%" },
    { text: "Supervisor", dataField: "supervisor", width: "25%" },
  ]

}

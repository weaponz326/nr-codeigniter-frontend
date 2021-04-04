import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { LeaveApiService } from '../leave-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-leave',
  templateUrl: './all-leave.component.html',
  styleUrls: ['./all-leave.component.css']
})
export class AllLeaveComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private leaveApi: LeaveApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Leave", url: "/suite/leave/all-leave" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.leaveApi.getLeave()
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

  viewLeave(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('leave_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/leave/view-leave');
  }

  // widgets
  // -----------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'leave_code', type: 'string' },
      { name: 'employee_name', type: 'string' },
      { name: 'employee_code', type: 'string' },
      { name: 'date_requested', type: 'string' },
      { name: 'leave_status', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Leave ID", dataField: "leave_code", width: "15%" },
    { text: "Employee Name", dataField: "employee_name", width: "30%" },
    { text: "Employee ID", dataField: "employee_id", width: "15%" },
    { text: "Date Requested", dataField: "date_requested", width: "20%" },
    { text: "Leave Status", dataField: "leave_status", width: "20%" },
  ];

}

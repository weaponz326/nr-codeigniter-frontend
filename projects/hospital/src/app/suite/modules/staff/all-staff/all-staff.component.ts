import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { StaffApiService } from '../staff-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';

@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.css']
})
export class AllStaffComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  constructor(
    private router: Router,
    private staffApi: StaffApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.staffApi.getStaff()
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

  viewStaff(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('staff_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/staff/view-staff');
  }

  // widgets
  // -------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'staff_code', type: 'string' },
      { name: 'staff_name', type: 'string' },
      { name: 'department', type: 'string' },
      { name: 'job', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Staff ID", dataField: "staff_code", width: "15%" },
    { text: "Staff Name", dataField: "staff_name", width: "37%" },
    { text: "Department", dataField: "department", width: "24%" },
    { text: "Job", dataField: "job", width: "24%" }
  ];

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { EmployeesApiService } from '../employees-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  constructor(
    private router: Router,
    private employeesApi: EmployeesApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Employees", url: "/suite/employees/all-employees" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.employeesApi.getEmployees()
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

  viewEmployee(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('employee_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/employees/view-employee');
  }

  // widgets
  // --------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'employee_name', type: 'string' },
      { name: 'employee_code', type: 'string' },
      { name: 'department', type: 'string' },
      { name: 'job', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Employee ID", dataField: "employee_code", width: "15%" },
    { text: "Employee Name", dataField: "employee_name", width: "35%" },
    { text: "Department", dataField: "department", width: "25%" },
    { text: "Job", dataField: "job", width: "25%" }
  ];

}

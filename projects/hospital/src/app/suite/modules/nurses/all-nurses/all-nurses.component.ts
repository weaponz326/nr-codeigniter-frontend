import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { NursesApiService } from '../nurses-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-nurses',
  templateUrl: './all-nurses.component.html',
  styleUrls: ['./all-nurses.component.css']
})
export class AllNursesComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private nursesApi: NursesApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Nurses", url: "/suite/nurses/all-nurses" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.nursesApi.getNurses()
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

  viewNurse(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('nurse_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/nurses/view-nurse');
  }

  // widgets
  // ------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'nurse_name', type: 'string' },
      { name: 'nurse_code', type: 'string' },
      { name: 'department', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Nurse ID", dataField: "nurse_code", width: "20%" },
    { text: "Nurse Name", dataField: "nurse_name", width: "45%" },
    { text: "Department", dataField: "department", width: "35%" },
  ];

}

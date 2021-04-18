import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { SchedulesApiService } from '../schedules-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-schedules',
  templateUrl: './all-schedules.component.html',
  styleUrls: ['./all-schedules.component.css']
})
export class AllSchedulesComponent implements OnInit {

  constructor(
    private router: Router,
    private schedulesApi: SchedulesApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Schedules", url: "/suite/schedules/all-schedules" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.schedulesApi.getAllSchedules()
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

  viewSchedule(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('schedule_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/schedules/view-schedules');
  }

  // widgets
  // -------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'schedule_name', type: 'string' },
      { name: 'schedule_code', type: 'string' },
      { name: 'from_date', type: 'string' },
      { name: 'to_date', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Schedules ID", dataField: "schedules_code", width: "20%" },
    { text: "Schedules Name", dataField: "schedules_name", width: "50%" },
    { text: "From", dataField: "from_date", filtertype: "range", width: "15%" },
    { text: "To", dataField: "to_date", filtertype: "range", width: "15%" },
  ];

}

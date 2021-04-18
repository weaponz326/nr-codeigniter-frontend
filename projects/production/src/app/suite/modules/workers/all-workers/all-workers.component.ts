import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { WorkersApiService } from '../workers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css']
})
export class AllWorkersComponent implements OnInit {

  constructor(
    private router: Router,
    private workersApi: WorkersApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Workers", url: "/suite/workers/all-workers" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.workersApi.getWorkers()
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

  viewWorker(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('worker_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/workers/view-worker');
  }

  // widgets
  // ----------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'worker_name', type: 'string' },
      { name: 'worker_code', type: 'string' },
      { name: 'department', type: 'string' },
      { name: 'job', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Worker ID", dataField: "worker_code", width: "15%" },
    { text: "Worker Name", dataField: "worker_name", width: "35%" },
    { text: "Department", dataField: "department", width: "25%" },
    { text: "Job", dataField: "job", width: "25%" }
  ];

}

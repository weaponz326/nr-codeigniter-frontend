import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ServicesApiService } from '../services-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private servicesApi: ServicesApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Services", url: "/suite/services/all-services" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.servicesApi.getServices()
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

  viewService(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('service_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/services/view-service');
  }

  // widgets
  // -----------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'service_code', type: 'string' },
      { name: 'service_type', type: 'string' },
      { name: 'guest_name', map: 'guest>guest_name', type: 'string' },
      { name: 'guest_code', map: 'guest>guest_code', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Sevice ID", dataField: "service_code", width: "15%" },
    { text: "Sevice Type", dataField: "service_type", width: "30%" },
    { text: "Guest Name", dataField: "guest_name", width: "40%" },
    { text: "Guest ID", dataField: "guest_code", width: "15%" },
  ];

}

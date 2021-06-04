import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { HousekeepingApiService } from '../housekeeping-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-housekeeping',
  templateUrl: './all-housekeeping.component.html',
  styleUrls: ['./all-housekeeping.component.css']
})
export class AllHousekeepingComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private housekeepingApi: HousekeepingApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Housekeepings", url: "/suite/housekeepings/all-housekeepings" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.housekeepingApi.getAllHouseKeeping()
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

  viewHousekeeping(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('housekeeping_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/housekeeping/view-housekeeping');
  }

  // widgets
  // -----------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'housekeeping_code', type: 'string' },
      { name: 'housekeeping_date', type: 'string' },
      { name: 'roo_umber', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "House Keeping ID", dataField: "housekeeping_code", width: "30%" },
    { text: "Room No.", dataField: "room_number", width: "30%" },
    { text: "House Keeping Date", dataField: "housekeeping_date", filtertype: "range", width: "40%" },
  ];


}

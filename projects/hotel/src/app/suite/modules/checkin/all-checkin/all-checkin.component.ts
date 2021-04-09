import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { CheckinApiService } from '../checkin-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-checkin',
  templateUrl: './all-checkin.component.html',
  styleUrls: ['./all-checkin.component.css']
})
export class AllCheckinComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private checkinApi: CheckinApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Check-In", url: "/suite/checkin/all-checkin" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.checkinApi.getAllCheckin()
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

  viewCheckin(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('checkin_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/checkin/view-checkin');
  }

  // widgets
  // ------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'checkin_code', type: 'string' },
      { name: 'checkin_date', type: 'string' },
      { name: 'guest_name', map: 'guest>guest_name', type: 'string' },
      { name: 'guest_code', map: 'guest>guest_code', type: 'string' },
      { name: 'room_number', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Check-In ID", dataField: "chwckin_code", width: "12%" },
    { text: "Check-In Date", dataField: "checkin_date", filtertype: "range", width: "18%" },
    { text: "Guest Name", dataField: "guest_name", width: "40%" },
    { text: "Guest ID", dataField: "guest_id", width: "12%" },
    { text: "Room No.", dataField: "room_number", width: "18%" },
  ];

}

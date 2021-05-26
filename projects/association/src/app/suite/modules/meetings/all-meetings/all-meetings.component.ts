import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { MeetingsApiService } from '../meetings-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-meetings',
  templateUrl: './all-meetings.component.html',
  styleUrls: ['./all-meetings.component.css']
})
export class AllMeetingsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private meetingsApi: MeetingsApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Meetings", url: "/suite/meetings/all-meetings" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.meetingsApi.getMeetings()
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

  viewMeeting(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('meeting_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/meetings/view-meeting');
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'meeting_date', type: 'string' },
      { name: 'meeting_time', type: 'string' },
      { name: 'location', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Meeting Date", dataField: "meeting_date", width: "30%" },
    { text: "Meeting Time", dataField: "meeting_time", width: "30%" },
    { text: "Location", dataField: "location", width: "40%" },
  ];

}

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { RosterApiService } from '../roster-api.service';

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-rosters',
  templateUrl: './all-rosters.component.html',
  styleUrls: ['./all-rosters.component.css']
})
export class AllRostersComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Roster", url: "/suite/roster/all-roster" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.rosterApi.getRoster()
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

  viewRoster(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('roster_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/roster/view-roster');
  }

  // widgets
  // --------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'roster_code', type: 'string' },
      { name: 'roster_name', type: 'string' },
      { name: 'source', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Roster ID", dataField: "roster_code", width: "20%" },
    { text: "Roster Name", dataField: "roster_name", width: "50%" },
    { text: "Source", dataField: "source", filtertype: "range", width: "30%" },
  ];

}

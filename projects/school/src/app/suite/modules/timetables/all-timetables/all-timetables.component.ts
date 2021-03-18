import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { TimetablesApiService } from '../timetables-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-timetables',
  templateUrl: './all-timetables.component.html',
  styleUrls: ['./all-timetables.component.css']
})
export class AllTimetablesComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private timetablesApi: TimetablesApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Timetables", url: "/suite/timetables/all-timetables" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.timetablesApi.getTimetables()
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

  viewTimetable(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('timetable_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/timetables/full-timetable');
  }

  // widgets
  // --------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'timetable_code', type: 'string' },
      { name: 'timetable_name', type: 'string' },
      { name: 'term', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Timetable ID", dataField: "timetable_code", width: "15%" },
    { text: "Timetable Name", dataField: "timetable_name", width: "55%" },
    { text: "Term", dataField: "erm", width: "30%" },
  ];

}

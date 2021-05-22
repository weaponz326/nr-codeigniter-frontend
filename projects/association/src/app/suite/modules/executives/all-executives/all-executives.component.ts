import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ExecutivesApiService } from '../executives-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-executives',
  templateUrl: './all-executives.component.html',
  styleUrls: ['./all-executives.component.css']
})
export class AllExecutivesComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private executivesApi: ExecutivesApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Executives", url: "/suite/executives/all-executives" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    // this.executivesApi.getExecutives()
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.source.localdata = res;
    //       this.grid.updatebounddata();
    //     },
    //     err => {
    //       console.log(err);
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }

  viewExecutive(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('executive_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/executives/view-executive');
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'executive_name', type: 'string' },
      { name: 'position', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Executive Name", dataField: "executive_name", width: "55%" },
    { text: "Position", dataField: "position", width: "45%" },
  ];

}

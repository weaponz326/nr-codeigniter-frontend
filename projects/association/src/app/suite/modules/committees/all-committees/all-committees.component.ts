import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { CommitteesApiService } from '../committees-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-committees',
  templateUrl: './all-committees.component.html',
  styleUrls: ['./all-committees.component.css']
})
export class AllCommitteesComponent implements OnInit {

  constructor(
    private router: Router,
    private committeesApi: CommitteesApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Committees", url: "/suite/committees/all-committees" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    // this.committeesApi.getCommittees()
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

  viewCommittee(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('committee_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/committees/view-committee');
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'committee_name', type: 'string' },
      { name: 'committee_status', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Committee Name", dataField: "committee_name", width: "70%" },
    { text: "Committee Status", dataField: "committee_status", width: "30%" },
  ];

}

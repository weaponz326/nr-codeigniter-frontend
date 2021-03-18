import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ParentsApiService } from '../parents-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-parents',
  templateUrl: './all-parents.component.html',
  styleUrls: ['./all-parents.component.css']
})
export class AllParentsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private parentsApi: ParentsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Parents", url: "/suite/parents/all-parents" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.parentsApi.getParents()
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

  viewParent(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('parent_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/parents/view-parent');
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'parent_code', type: 'string' },
      { name: 'parent_name', type: 'string' },
      { name: 'wards', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Parent ID", dataField: "parent_code", width: "15%" },
    { text: "Parent Name", dataField: "parent_name", width: "35%" },
    { text: "Ward(s)", dataField: "wards", width: "50%" }
  ];

}

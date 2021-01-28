import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { WardsApiService } from '../wards-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-wards',
  templateUrl: './all-wards.component.html',
  styleUrls: ['./all-wards.component.css']
})
export class AllWardsComponent implements OnInit, AfterViewInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  constructor(
    private router: Router,
    private wardsApi: WardsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.wardsApi.getWards()
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

  viewWard(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('ward_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/wards/view-ward');
  }

  // widgets
  // -------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'ward_number', type: 'string' },
      { name: 'ward_name', type: 'string' },
      { name: 'ward_type', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Ward No.", dataField: "ward_number", width: "20%" },
    { text: "Ward Name", dataField: "ward_name", width: "45%" },
    { text: "Ward Type", dataField: "ward_type", width: "35%" },
  ];

}

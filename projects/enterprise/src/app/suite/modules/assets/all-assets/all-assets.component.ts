import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AssetsApiService } from '../assets-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-assets',
  templateUrl: './all-assets.component.html',
  styleUrls: ['./all-assets.component.css']
})
export class AllAssetsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private assetsApi: AssetsApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Assets", url: "/suite/assets/all-assets" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.assetsApi.getAssets()
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

  viewAsset(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('asset_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/assets/view-asset');
  }

  // widgets
  // -------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'asset_code', type: 'string' },
      { name: 'asset_name', type: 'string' },
      { name: 'asset_type', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'condition', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Asset ID", dataField: "asset_code", width: "15%" },
    { text: "Asset Name", dataField: "asset_name", width: "30%" },
    { text: "Type", dataField: "asset_type", width: "20%" },
    { text: "Location", dataField: "location", width: "20%" },
    { text: "Condition", dataField: "condition", width: "15%" },
  ];

}

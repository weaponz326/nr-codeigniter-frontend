import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { MarkettingApiService } from '../marketting-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-marketting',
  templateUrl: './all-marketting.component.html',
  styleUrls: ['./all-marketting.component.css']
})
export class AllMarkettingComponent implements OnInit {

  constructor(
    private router: Router,
    private markettingApi: MarkettingApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Campaigns", url: "/suite/campaigns/all-campaigns" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.markettingApi.getCampaigns()
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

  viewCampaign(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('campaign_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/marketting/view-campaign');
  }

  // widgets
  // ------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'campaign_code', type: 'string' },
      { name: 'campaign_name', type: 'string' },
      { name: 'campaign_type', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Campaign ID", dataField: "campaign_code", width: "20%" },
    { text: "Campaign Name", dataField: "campaign_name", width: "45%" },
    { text: "Campaign Type", dataField: "campaign_type", width: "35%" },
  ];

}

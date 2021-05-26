import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ActionPlanApiService } from '../action-plan-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-plans',
  templateUrl: './all-plans.component.html',
  styleUrls: ['./all-plans.component.css']
})
export class AllPlansComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private plansApi: ActionPlanApiService,
  ) { }

  @ViewChild('newButtonReference') newButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;
  @ViewChild('transactionsButtonReference') transactionsButton: jqxButtonComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Plans", url: "/suite/action-plan/all-plans" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.plansApi.getPlans()
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

  viewPlan(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('plan_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/action-plan/view-plan')
  }

  // widgets
  // --------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'plan_name', type: 'string' },
      { name: 'start_date', type: 'string' },
      { name: 'end_date', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Plan Name", dataField: "plan_name", width: "50%" },
    { text: "Start Date", dataField: "start_date", width: "25%" },
    { text: "End Date", dataField: "end_date", width: "25%" },
  ]

}

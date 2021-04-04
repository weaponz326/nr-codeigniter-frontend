import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { BudgetApiService } from '../budget-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-budget',
  templateUrl: './all-budget.component.html',
  styleUrls: ['./all-budget.component.css']
})
export class AllBudgetComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private budgetApi: BudgetApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Budgets", url: "/suite/budget/all-budget" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();

    console.log(sessionStorage.getItem('budget_id'));
  }

  getData(){
    this.budgetApi.getBudgets()
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

  viewBudget(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('budget_id', event.args.row.bounddata.id);
    console.log(sessionStorage.getItem('budget_id'));

    this.router.navigateByUrl('/suite/budget/view-budget')
  }

  // widgets
  // ------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'budget_name', type: 'string' },
      { name: 'budget_type', type: 'string' },
      { name: 'created_at', type: 'date' },
    ],
    id: 'id',
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  // all budget grid settings
  columns: any[] = [
    { text: "Budget Name", dataField: "budget_name", width: "50%" },
    { text: "Date Created", dataField: "date_created", filtertype: "range", width: "25%" },
    { text: "Last Updated", dataField: "last_updated", filtertype: "range", width: "25%" }
  ];

}

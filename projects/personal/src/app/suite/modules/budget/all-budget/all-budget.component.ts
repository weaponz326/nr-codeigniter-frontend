import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

import { BudgetApiService } from '../budget-api.service'
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-all-budget',
  templateUrl: './all-budget.component.html',
  styleUrls: ['./all-budget.component.css']
})
export class AllBudgetComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private budgetApi: BudgetApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

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
        }
      )
  }

  viewBudget(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('budget_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/budget/view-budget')
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  // widgets
  // --------------------------------------------------------------------------------

  // budget grid settings

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'budget_name', type: 'string' },
      { name: 'budget_type', type: 'string' },
      { name: 'created_at', type: 'date', format: 'yyyy-MM-dd HH:mm' },
      { name: 'updated_at', type: 'date', format: 'yyyy-MM-dd HH:mm' },
    ],
    id: 'id',
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Budget Name", dataField: "budget_name", width: "36%" },
    { text: "Budget Type", dataField: "budget_type", width: "24%" },
    { text: "Date Created", dataField: "date_created", filtertype: "range", width: "20%" },
    { text: "Last Updated", dataField: "last_updated", filtertype: "range", width: "20%" }
  ];

}

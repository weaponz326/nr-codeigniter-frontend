import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-budget',
  templateUrl: './all-budget.component.html',
  styleUrls: ['./all-budget.component.css']
})
export class AllBudgetComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ------------------------------------------------------------------------------------------

  // all budget grid settings
  columns: any[] = [
    { text: "Budget Name", dataField: "budget_name", width: "50%" },
    { text: "Date Created", dataField: "date_created", filtertype: "range", width: "25%" },
    { text: "Last Updated", dataField: "last_updated", filtertype: "range", width: "25%" }
  ];

}

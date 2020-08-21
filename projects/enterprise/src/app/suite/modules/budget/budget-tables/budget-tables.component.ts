import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-budget-tables',
  templateUrl: './budget-tables.component.html',
  styleUrls: ['./budget-tables.component.css']
})
export class BudgetTablesComponent implements OnInit {

  @ViewChild('incomeGridReference') incomeGrid: jqxGridComponent;
  @ViewChild('expenditureGridReference') expenditureGrid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------------------

  // income grid settings

  incomeColumns: any[] = [
    { text: 'Item Description', columngroup: 'incomeGroup', dataField: 'item', width: "70%" },
    { text: 'Amount', columngroup: 'incomeGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  incomeColumnGroups: any[] = [
    { text: "Income", align: "center", name: "incomeGroup" }
  ];

  // expenditure grid settings

  expenditureColumns: any[] = [
    { text: 'Item Description', columngroup: 'expenditureGroup', dataField: 'item', width: "70%" },
    { text: 'Amount', columngroup: 'expenditureGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  expenditureColumnGroups: any[] = [
    { text: "Expenditure", align: "center", name: "expenditureGroup" }
  ];

}

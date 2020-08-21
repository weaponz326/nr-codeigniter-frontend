import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-payroll',
  templateUrl: './all-payroll.component.html',
  styleUrls: ['./all-payroll.component.css']
})
export class AllPayrollComponent implements OnInit {

  @ViewChild('buttonReference') newButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Date Gemerated", dataField: "date_generated", width: "15%" },
    { text: "Payroll Name", dataField: "payroll_name", width: "35%" },
    { text: "Month", dataField: "month", width: "15%" },
    { text: "Year", dataField: "year", width: "15%" },
    { text: "Payroll Status", dataField: "payroll_status", width: "20%" },
  ]

}

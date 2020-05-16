import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
  selector: 'app-all-appraisal',
  templateUrl: './all-appraisal.component.html',
  styleUrls: ['./all-appraisal.component.css']
})
export class AllAppraisalComponent implements OnInit {

  constructor() { }

  @ViewChild('newButtonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Appraisal ID", dataField: "appraisal_code", width: "10%" },
    { text: "Employee Name", dataField: "employee_name", width: "25%" },
    { text: "Employee ID", dataField: "employee_code", width: "10%" },
    { text: "Start Date", dataField: "start_date", filtertype: "range", width: "15%" },
    { text: "End Date", dataField: "end_date", filtertype: "range", width: "15%" },
    { text: "Supervisor", dataField: "supervisor", width: "25%" },
  ]

  ngOnInit(): void {
  }

}

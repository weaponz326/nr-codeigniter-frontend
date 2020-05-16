import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Employee ID", dataField: "employee_code", width: "15%" },
    { text: "Employee Name", dataField: "employee_name", width: "35%" },
    { text: "Department", dataField: "department", width: "25%" },
    { text: "Job", dataField: "job", width: "25%" }
  ];

  ngOnInit(): void {
  }

}

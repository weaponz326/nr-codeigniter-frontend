import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-leave',
  templateUrl: './all-leave.component.html',
  styleUrls: ['./all-leave.component.css']
})
export class AllLeaveComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // -----------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Leave ID", dataField: "leave_id", width: "15%" },
    { text: "Employee Name", dataField: "employee_name", width: "30%" },
    { text: "Employee ID", dataField: "employee_id", width: "15%" },
    { text: "Date Requested", dataField: "date_requested", width: "20%" },
    { text: "Leave Status", dataField: "leave_status", width: "20%" },
  ];

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.css']
})
export class AllStaffComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ----------------------------------------------------------------------------

  columns: any[] = [
    { text: "Staff ID", dataField: "staff_code", width: "15%" },
    { text: "Staff Name", dataField: "staff_name", width: "37%" },
    { text: "Department", dataField: "department", width: "24%" },
    { text: "Job", dataField: "job", width: "24%" }
  ];

}

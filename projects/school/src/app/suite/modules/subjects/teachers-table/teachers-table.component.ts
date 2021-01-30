import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
  styleUrls: ['./teachers-table.component.css']
})
export class TeachersTableComponent implements OnInit {

  constructor() { }

  @ViewChild("teachersGridReference") detailsGrid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------

  // grid columns
  columns: any[] = [
    { text: "Teacher ID", dataField: "teacher_code", width: "30%" },
    { text: "Teacher Name", dataField: "teacher_name", width: "70%" },
  ];

}

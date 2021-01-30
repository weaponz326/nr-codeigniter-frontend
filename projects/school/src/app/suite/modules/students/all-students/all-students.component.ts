import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", width: "20%" },
    { text: "Student Name", dataField: "student_name", width: "50%" },
    { text: "Class", dataField: "class", width: "30%" }
  ];

}

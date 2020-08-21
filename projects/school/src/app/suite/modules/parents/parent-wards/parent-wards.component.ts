import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-parent-wards',
  templateUrl: './parent-wards.component.html',
  styleUrls: ['./parent-wards.component.css']
})
export class ParentWardsComponent implements OnInit {

  @ViewChild('wardsGridReference') wardsGrid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ----------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Student ID", dataField: "studentCode", width: "20%" },
    { text: "Student Name", dataField: "student name", width: "45%" },
    { text: "Class", dataField: "class", width: "35%" }
  ];

}

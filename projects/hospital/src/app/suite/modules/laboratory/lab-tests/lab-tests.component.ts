import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
  selector: 'app-lab-tests',
  templateUrl: './lab-tests.component.html',
  styleUrls: ['./lab-tests.component.css']
})
export class LabTestsComponent implements OnInit {

  constructor() { }

  @ViewChild("testsGridReference") testsGrid: jqxGridComponent;

  columns: any[] = [
    { text: 'Test ID', dataField: 'test_code', width: "10%" },
    { text: 'Test Name', dataField: 'test_name', width: "30%" },
    { text: 'Remarks', dataField: 'remarks', width: "50%" },
    { 
      text: 'Attachments', dataField: 'attachments', columntype: "button", editable: "false", width: "10%",
      cellsrenderer: (): string => {
        return 'Attachments';
      },
      buttonclick: (row: number): void => {
        // open attachments window
      }
    },
  ];

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-labs',
  templateUrl: './all-labs.component.html',
  styleUrls: ['./all-labs.component.css']
})
export class AllLabsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Lab ID", dataField: "lab_code", width: "15%" },
    { text: "Lab Date", dataField: "lab_date", filtertype: "range", width: "15%" },
    { text: "Patient Name", dataField: "patient_name", width: "30%" },
    { text: "Lab Type", dataField: "lab_type", width: "40%" },
  ];

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-admissions',
  templateUrl: './all-admissions.component.html',
  styleUrls: ['./all-admissions.component.css']
})
export class AllAdmissionsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Admission ID", dataField: "admission_code", width: "20%" },
    { text: "Patient Name", dataField: "patient_name", width: "50%" },
    { text: "Admission Date", dataField: "admission_date", filtertype: "range", width: "30%" },
  ];

  ngOnInit(): void {
  }

}

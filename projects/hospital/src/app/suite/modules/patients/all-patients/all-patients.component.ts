import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Clinical No.", dataField: "clinical_number", width: "20%" },
    { text: "Patient Name", dataField: "patient_name", width: "45%" },
    { text: "Sex", dataField: "sex", width: "15%" },
    { text: "Phone No.", dataField: "phone", width: "20%" }
  ];

  ngOnInit(): void {
  }

}

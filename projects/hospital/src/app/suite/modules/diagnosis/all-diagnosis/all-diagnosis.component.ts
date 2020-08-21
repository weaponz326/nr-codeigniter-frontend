import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-diagnosis',
  templateUrl: './all-diagnosis.component.html',
  styleUrls: ['./all-diagnosis.component.css']
})
export class AllDiagnosisComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // -----------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Diagnosis ID", dataField: "diagnosis_code", width: "20%" },
    { text: "Patient Name", dataField: "patient_name", width: "50%" },
    { text: "Diagnosis Date", dataField: "diagnosis_date", filtertype: "range", width: "30%" },
  ];

}

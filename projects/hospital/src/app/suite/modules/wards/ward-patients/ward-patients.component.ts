import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
  selector: 'app-ward-patients',
  templateUrl: './ward-patients.component.html',
  styleUrls: ['./ward-patients.component.css']
})
export class WardPatientsComponent implements OnInit {

  constructor() { }

  @ViewChild("patientsGridReference") patientsGrid: jqxGridComponent;

  columns: any[] = [
    { text: "Patient Name", dataField: "patient_name", width: "50%" },
    { text: "Date Admitted", dataField: "admitted_date", filtertype: "range", width: "30%" },
    { text: "Bed No.", dataField: "bed_number", width: "20%" },
  ];

  ngOnInit(): void {
  }

}

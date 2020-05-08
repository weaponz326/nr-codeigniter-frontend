import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-prescriptions',
  templateUrl: './all-prescriptions.component.html',
  styleUrls: ['./all-prescriptions.component.css']
})
export class AllPrescriptionsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Prescription ID", dataField: "prescription_code", width: "20%" },
    { text: "Patient Name", dataField: "patient_name", width: "50%" },
    { text: "Prescription Date", dataField: "prescription_date", filtertype: "range", width: "30%" },
  ];

  ngOnInit(): void {
  }

}

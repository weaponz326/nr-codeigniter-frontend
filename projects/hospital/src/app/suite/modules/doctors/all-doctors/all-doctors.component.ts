import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ----------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Doctor ID", dataField: "doctor_code", width: "20%" },
    { text: "Doctor Name", dataField: "doctor_name", width: "45%" },
    { text: "Speciality", dataField: "speciality", width: "35%" },
  ];

}

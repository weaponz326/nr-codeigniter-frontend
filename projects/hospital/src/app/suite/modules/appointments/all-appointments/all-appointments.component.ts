import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {

  @ViewChild('addAppointmentReference') addAppointmentButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Appointment ID", dataField: "appointment_code", width: "10%" },
    { text: "Patient Name", dataField: "patient_name", width: "30%" },
    { text: "Consultant Name", dataField: "doctor_name", width: "30%" },
    { text: "Appointment Date", dataField: "appointment_date", filtertype: "range", width: "15%" },
    { text: "Appointment Status", dataField: "appointment_status", width: "15%" },
  ];

}

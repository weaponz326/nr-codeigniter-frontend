import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients-wrapper',
  templateUrl: './patients-wrapper.component.html',
  styleUrls: ['./patients-wrapper.component.css']
})
export class PatientsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Patients", url: "/suite/patients/all-patients", icon: "fa fa-fw fa-list" },
    { text: "New Patient", url: "/suite/patients/new-patient", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

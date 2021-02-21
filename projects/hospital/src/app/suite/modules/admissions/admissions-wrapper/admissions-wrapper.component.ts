import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admissions-wrapper',
  templateUrl: './admissions-wrapper.component.html',
  styleUrls: ['./admissions-wrapper.component.css']
})
export class AdmissionsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Admissions", url: "/suite/admissions/all-admissions", icon: "fa fa-fw fa-list" },
    { text: "New Admission", url: "/suite/admissions/new-admission", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

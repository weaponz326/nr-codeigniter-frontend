import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-wrapper',
  templateUrl: './employees-wrapper.component.html',
  styleUrls: ['./employees-wrapper.component.css']
})
export class EmployeesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Employees", url: "/suite/employees/all-employees", icon: "fa fa-fw fa-list" },
    { text: "New Employee", url: "/suite/employees/new-employee", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-wrapper',
  templateUrl: './staff-wrapper.component.html',
  styleUrls: ['./staff-wrapper.component.css']
})
export class StaffWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Staff", url: "/suite/staff/all-staff", icon: "fa fa-fw fa-list" },
    { text: "New Staff", url: "/suite/staff/new-staff", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

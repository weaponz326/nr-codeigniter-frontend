// main route view and wrapper for all calendaar module components

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendar-wrapper',
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.css']
})
export class CalendarWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "View Calendar", url: "/suite/calendar/view-calendar", icon: "fa fa-fw fa-eye" },
    { text: "All Appointments", url: "/suite/calendar/all-appointments", icon: "fa fa-fw fa-list" }
  ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules-wrapper',
  templateUrl: './schedules-wrapper.component.html',
  styleUrls: ['./schedules-wrapper.component.css']
})
export class SchedulesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Schedules", url: "/suite/schedules/all-schedules", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance-wrapper',
  templateUrl: './attendance-wrapper.component.html',
  styleUrls: ['./attendance-wrapper.component.css']
})
export class AttendanceWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Attendance", url: "/suite/attendance/all-attendance", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

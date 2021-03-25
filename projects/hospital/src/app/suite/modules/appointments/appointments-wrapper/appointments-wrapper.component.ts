import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments-wrapper',
  templateUrl: './appointments-wrapper.component.html',
  styleUrls: ['./appointments-wrapper.component.css']
})
export class AppointmentsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Appointments", url: "/suite/appointments/all-appointments", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

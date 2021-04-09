import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings-wrapper',
  templateUrl: './bookings-wrapper.component.html',
  styleUrls: ['./bookings-wrapper.component.css']
})
export class BookingsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Bookings", url: "/suite/bookings/all-bookings", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

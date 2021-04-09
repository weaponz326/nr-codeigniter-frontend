import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkin-wrapper',
  templateUrl: './checkin-wrapper.component.html',
  styleUrls: ['./checkin-wrapper.component.css']
})
export class CheckinWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Check-In", url: "/suite/checkin/all-checkin", icon: "fa fa-fw fa-list" },
    { text: "New Check-In", url: "/suite/checkin/new-checkin", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

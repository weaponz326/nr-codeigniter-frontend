import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guests-wrapper',
  templateUrl: './guests-wrapper.component.html',
  styleUrls: ['./guests-wrapper.component.css']
})
export class GuestsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Guests", url: "/suite/guests/all-guests", icon: "fa fa-fw fa-list" },
    { text: "New Guest", url: "/suite/guests/new-guest", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-wrapper',
  templateUrl: './portal-wrapper.component.html',
  styleUrls: ['./portal-wrapper.component.css']
})
export class PortalWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "Timeline", url: "/suite/portal/timeline", icon: "fa fa-fw fa-history" },
    { text: "New Rink", url: "/suite/portal/search", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

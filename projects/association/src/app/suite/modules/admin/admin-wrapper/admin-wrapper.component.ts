import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-wrapper',
  templateUrl: './admin-wrapper.component.html',
  styleUrls: ['./admin-wrapper.component.css']
})
export class AdminWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Users", url: "/suite/admin/all-users", icon: "fa fa-fw fa-users" },
    { text: "Invitations", url: "/suite/admin/invitations", icon: "fa fa-fw fa-envelope" },
    { text: "New Invitation", url: "/suite/admin/search", icon: "fa fa-fw fa-plus" },
    { text: "All Activities", url: "/suite/admin/all-activities", icon: "fa fa-fw fa-edit" },
  ]

  ngOnInit(): void {
  }

}

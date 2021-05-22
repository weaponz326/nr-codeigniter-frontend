import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-wrapper',
  templateUrl: './groups-wrapper.component.html',
  styleUrls: ['./groups-wrapper.component.css']
})
export class GroupsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Groups", url: "/suite/groups/all-groups", icon: "fa fa-fw fa-list" },
    { text: "Add Group", url: "/suite/groups/add-group", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

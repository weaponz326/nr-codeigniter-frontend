import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-wrapper',
  templateUrl: './members-wrapper.component.html',
  styleUrls: ['./members-wrapper.component.css']
})
export class MembersWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Members", url: "/suite/members/all-members", icon: "fa fa-fw fa-list" },
    { text: "New Member", url: "/suite/members/new-member", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

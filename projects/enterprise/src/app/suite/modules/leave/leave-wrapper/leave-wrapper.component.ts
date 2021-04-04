import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-wrapper',
  templateUrl: './leave-wrapper.component.html',
  styleUrls: ['./leave-wrapper.component.css']
})
export class LeaveWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Leave", url: "/suite/leave/all-leave", icon: "fa fa-fw fa-list" },
    { text: "Add Leave", url: "/suite/leave/add-leave", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

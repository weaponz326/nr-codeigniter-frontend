import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings-wrapper',
  templateUrl: './meetings-wrapper.component.html',
  styleUrls: ['./meetings-wrapper.component.css']
})
export class MeetingsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Meetings", url: "/suite/meetings/all-meetings", icon: "fa fa-fw fa-list" },
    { text: "Add Meeting", url: "/suite/meetings/add-meeting", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

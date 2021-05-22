import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-committees-wrapper',
  templateUrl: './committees-wrapper.component.html',
  styleUrls: ['./committees-wrapper.component.css']
})
export class CommitteesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Committees", url: "/suite/committees/all-committees", icon: "fa fa-fw fa-list" },
    { text: "New Committee", url: "/suite/committees/new-committee", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

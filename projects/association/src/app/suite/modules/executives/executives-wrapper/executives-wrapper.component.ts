import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-executives-wrapper',
  templateUrl: './executives-wrapper.component.html',
  styleUrls: ['./executives-wrapper.component.css']
})
export class ExecutivesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Executives", url: "/suite/executives/all-executives", icon: "fa fa-fw fa-list" },
    { text: "New Executive", url: "/suite/executives/new-executive", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

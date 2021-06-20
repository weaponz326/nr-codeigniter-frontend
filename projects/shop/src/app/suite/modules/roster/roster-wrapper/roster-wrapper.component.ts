import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roster-wrapper',
  templateUrl: './roster-wrapper.component.html',
  styleUrls: ['./roster-wrapper.component.css']
})
export class RosterWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Rosters", url: "/suite/roster/all-rosters", icon: "fa fa-fw fa-list" },
  ]
  
  ngOnInit(): void {
  }

}

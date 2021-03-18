import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetables-wrapper',
  templateUrl: './timetables-wrapper.component.html',
  styleUrls: ['./timetables-wrapper.component.css']
})
export class TimetablesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Timetables", url: "/suite/timetables/all-timetables", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

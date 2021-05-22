import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-wrapper',
  templateUrl: './year-wrapper.component.html',
  styleUrls: ['./year-wrapper.component.css']
})
export class YearWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Years", url: "/suite/year/all-years", icon: "fa fa-fw fa-list" },
    { text: "Add Year", url: "/suite/year/add-year", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-housekeeping-wrapper',
  templateUrl: './housekeeping-wrapper.component.html',
  styleUrls: ['./housekeeping-wrapper.component.css']
})
export class HousekeepingWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All House Keeping", url: "/suite/housekeeping/all-housekeeping", icon: "fa fa-fw fa-list" },
  ]
  ngOnInit(): void {
  }

}

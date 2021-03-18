import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fees-wrapper',
  templateUrl: './fees-wrapper.component.html',
  styleUrls: ['./fees-wrapper.component.css']
})
export class FeesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Bills", url: "/suite/fees/all-bills", icon: "fa fa-fw fa-list" },
    { text: "All Fees", url: "/suite/fees/all-fees", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

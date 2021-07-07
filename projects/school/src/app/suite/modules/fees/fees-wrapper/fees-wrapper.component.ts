import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fees-wrapper',
  templateUrl: './fees-wrapper.component.html',
  styleUrls: ['./fees-wrapper.component.css']
})
export class FeesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Fees", url: "/suite/fees/all-fees", icon: "fa fa-fw fa-list" },
    { text: "Create Fees", url: "/suite/fees/create-fees", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketting-wrapper',
  templateUrl: './marketting-wrapper.component.html',
  styleUrls: ['./marketting-wrapper.component.css']
})
export class MarkettingWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Marketting", url: "/suite/marketting/all-marketting", icon: "fa fa-fw fa-list" },
    { text: "New Campaign", url: "/suite/marketting/new-campaign", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

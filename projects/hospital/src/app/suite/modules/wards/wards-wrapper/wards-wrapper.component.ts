import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wards-wrapper',
  templateUrl: './wards-wrapper.component.html',
  styleUrls: ['./wards-wrapper.component.css']
})
export class WardsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Wards", url: "/suite/wards/all-wards", icon: "fa fa-fw fa-list" },
    { text: "New Ward", url: "/suite/wards/new-ward", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

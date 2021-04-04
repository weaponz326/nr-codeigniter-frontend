import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procurement-wrapper',
  templateUrl: './procurement-wrapper.component.html',
  styleUrls: ['./procurement-wrapper.component.css']
})
export class ProcurementWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Procurement", url: "/suite/procurement/all-procurement", icon: "fa fa-fw fa-list" },
    { text: "New Procurement", url: "/suite/procurement/new-procurement", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

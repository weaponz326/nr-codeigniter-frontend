import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-wrapper',
  templateUrl: './tables-wrapper.component.html',
  styleUrls: ['./tables-wrapper.component.css']
})
export class TablesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Tables", url: "/suite/tables/all-tables", icon: "fa fa-fw fa-list" },
    { text: "New Table", url: "/suite/tables/new-table", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

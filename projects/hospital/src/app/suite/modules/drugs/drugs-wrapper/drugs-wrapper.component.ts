import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drugs-wrapper',
  templateUrl: './drugs-wrapper.component.html',
  styleUrls: ['./drugs-wrapper.component.css']
})
export class DrugsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Drugs", url: "/suite/drugs/all-drugs", icon: "fa fa-fw fa-list" },
    { text: "New Drug", url: "/suite/drugs/new-drug", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

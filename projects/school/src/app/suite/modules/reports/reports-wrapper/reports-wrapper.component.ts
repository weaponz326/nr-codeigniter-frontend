import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-wrapper',
  templateUrl: './reports-wrapper.component.html',
  styleUrls: ['./reports-wrapper.component.css']
})
export class ReportsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Reports", url: "/suite/reports/all-reports", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

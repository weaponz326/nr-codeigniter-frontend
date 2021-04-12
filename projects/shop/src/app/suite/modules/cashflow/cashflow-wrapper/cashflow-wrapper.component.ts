import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashflow-wrapper',
  templateUrl: './cashflow-wrapper.component.html',
  styleUrls: ['./cashflow-wrapper.component.css']
})
export class CashflowWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Sheets", url: "/suite/cashflow/all-cashflow", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

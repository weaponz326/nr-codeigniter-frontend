import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payroll-wrapper',
  templateUrl: './payroll-wrapper.component.html',
  styleUrls: ['./payroll-wrapper.component.css']
})
export class PayrollWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Payroll", url: "/suite/payroll/all-payroll", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

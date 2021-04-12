import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payables-wrapper',
  templateUrl: './payables-wrapper.component.html',
  styleUrls: ['./payables-wrapper.component.css']
})
export class PayablesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Payables", url: "/suite/payables/all-payables", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

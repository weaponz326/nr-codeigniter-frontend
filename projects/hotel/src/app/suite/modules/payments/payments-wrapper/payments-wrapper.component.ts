import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-wrapper',
  templateUrl: './payments-wrapper.component.html',
  styleUrls: ['./payments-wrapper.component.css']
})
export class PaymentsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Payments", url: "/suite/payments/all-payments", icon: "fa fa-fw fa-list" },
    { text: "New Payment", url: "/suite/payments/new-payment", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

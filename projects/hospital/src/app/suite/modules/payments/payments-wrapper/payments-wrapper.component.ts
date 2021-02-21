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
  ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-wrapper',
  templateUrl: './orders-wrapper.component.html',
  styleUrls: ['./orders-wrapper.component.css']
})
export class OrdersWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Orders", url: "/suite/orders/all-orders", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

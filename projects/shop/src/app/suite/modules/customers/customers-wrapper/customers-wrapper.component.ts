import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-wrapper',
  templateUrl: './customers-wrapper.component.html',
  styleUrls: ['./customers-wrapper.component.css']
})
export class CustomersWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Customers", url: "/suite/customers/all-customers", icon: "fa fa-fw fa-list" },
    { text: "Add Customer", url: "/suite/customers/add-customer", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

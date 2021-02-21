import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-wrapper',
  templateUrl: './accounts-wrapper.component.html',
  styleUrls: ['./accounts-wrapper.component.css']
})
export class AccountsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Accounts", url: "/suite/accounts/all-accounts", icon: "fa fa-fw fa-list" },
    { text: "All Transactions", url: "/suite/accounts/all-transactions", icon: "fa fa-fw fa-list" }
  ]

  ngOnInit(): void {
  }

}

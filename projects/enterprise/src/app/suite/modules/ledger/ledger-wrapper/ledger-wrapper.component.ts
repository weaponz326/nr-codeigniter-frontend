import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ledger-wrapper',
  templateUrl: './ledger-wrapper.component.html',
  styleUrls: ['./ledger-wrapper.component.css']
})
export class LedgerWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Ledger", url: "/suite/ledger/all-ledger", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

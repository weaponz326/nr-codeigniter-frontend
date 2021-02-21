import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bills-wrapper',
  templateUrl: './bills-wrapper.component.html',
  styleUrls: ['./bills-wrapper.component.css']
})
export class BillsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Bills", url: "/suite/bills/all-bills", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

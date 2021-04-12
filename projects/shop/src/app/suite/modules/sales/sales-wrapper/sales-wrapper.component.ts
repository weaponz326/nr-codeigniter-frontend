import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-wrapper',
  templateUrl: './sales-wrapper.component.html',
  styleUrls: ['./sales-wrapper.component.css']
})
export class SalesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Sales", url: "/suite/sales/all-sales", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

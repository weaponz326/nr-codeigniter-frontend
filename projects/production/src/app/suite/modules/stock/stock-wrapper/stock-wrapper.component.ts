import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-wrapper',
  templateUrl: './stock-wrapper.component.html',
  styleUrls: ['./stock-wrapper.component.css']
})
export class StockWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Stock", url: "/suite/stock/all-stock", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

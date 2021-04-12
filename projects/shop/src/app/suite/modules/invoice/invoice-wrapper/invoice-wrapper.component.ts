import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-wrapper',
  templateUrl: './invoice-wrapper.component.html',
  styleUrls: ['./invoice-wrapper.component.css']
})
export class InvoiceWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Invoice", url: "/suite/invoice/all-invoice", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

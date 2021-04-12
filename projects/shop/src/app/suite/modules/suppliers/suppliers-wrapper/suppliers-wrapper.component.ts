import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers-wrapper',
  templateUrl: './suppliers-wrapper.component.html',
  styleUrls: ['./suppliers-wrapper.component.css']
})
export class SuppliersWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Suppliers", url: "/suite/suppliers/all-suppliers", icon: "fa fa-fw fa-list" },
    { text: "New Supplier", url: "/suite/suppliers/new-supplier", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

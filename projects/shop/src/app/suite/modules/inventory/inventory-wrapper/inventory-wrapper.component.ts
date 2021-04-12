import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-wrapper',
  templateUrl: './inventory-wrapper.component.html',
  styleUrls: ['./inventory-wrapper.component.css']
})
export class InventoryWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Inventory", url: "/suite/inventory/all-inventory", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

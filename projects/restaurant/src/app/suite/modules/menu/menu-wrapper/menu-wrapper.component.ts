import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-wrapper',
  templateUrl: './menu-wrapper.component.html',
  styleUrls: ['./menu-wrapper.component.css']
})
export class MenuWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Items", url: "/suite/menu/all-items", icon: "fa fa-fw fa-list" },
    { text: "Add Item", url: "/suite/menu/add-item", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

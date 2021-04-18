import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-wrapper',
  templateUrl: './equipment-wrapper.component.html',
  styleUrls: ['./equipment-wrapper.component.css']
})
export class EquipmentWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Equipment", url: "/suite/equipment/all-equipment", icon: "fa fa-fw fa-list" },
    { text: "New Equipment", url: "/suite/equipment/add-equipment", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

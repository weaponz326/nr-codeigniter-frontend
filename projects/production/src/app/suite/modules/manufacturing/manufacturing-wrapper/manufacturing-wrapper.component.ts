import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacturing-wrapper',
  templateUrl: './manufacturing-wrapper.component.html',
  styleUrls: ['./manufacturing-wrapper.component.css']
})
export class ManufacturingWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Manufacturing", url: "/suite/manufacturing/all-manufacturing", icon: "fa fa-fw fa-list" },
    { text: "Add Manufacturing", url: "/suite/manufacturing/new-manufacturing", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

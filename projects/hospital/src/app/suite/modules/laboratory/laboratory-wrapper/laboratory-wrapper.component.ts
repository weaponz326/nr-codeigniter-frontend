import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laboratory-wrapper',
  templateUrl: './laboratory-wrapper.component.html',
  styleUrls: ['./laboratory-wrapper.component.css']
})
export class LaboratoryWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Laboaratory", url: "/suite/laboratory/all-labs", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

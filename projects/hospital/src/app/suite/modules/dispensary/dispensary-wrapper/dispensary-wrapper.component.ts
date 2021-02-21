import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispensary-wrapper',
  templateUrl: './dispensary-wrapper.component.html',
  styleUrls: ['./dispensary-wrapper.component.css']
})
export class DispensaryWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Dispenses", url: "/suite/dispensary/all-dispense", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

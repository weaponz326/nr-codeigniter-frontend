import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescriptions-wrapper',
  templateUrl: './prescriptions-wrapper.component.html',
  styleUrls: ['./prescriptions-wrapper.component.css']
})
export class PrescriptionsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Prescriptions", url: "/suite/prescriptions/all-prescriptions", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

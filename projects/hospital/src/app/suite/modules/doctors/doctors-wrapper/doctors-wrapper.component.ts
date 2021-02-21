import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-wrapper',
  templateUrl: './doctors-wrapper.component.html',
  styleUrls: ['./doctors-wrapper.component.css']
})
export class DoctorsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Doctors", url: "/suite/doctors/all-doctors", icon: "fa fa-fw fa-list" },
    { text: "New Doctor", url: "/suite/doctors/new-doctor", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

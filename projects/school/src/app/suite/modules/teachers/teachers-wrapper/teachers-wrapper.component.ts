import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-wrapper',
  templateUrl: './teachers-wrapper.component.html',
  styleUrls: ['./teachers-wrapper.component.css']
})
export class TeachersWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Teachers", url: "/suite/teachers/all-teachers", icon: "fa fa-fw fa-list" },
    { text: "Add Teacher", url: "/suite/teachers/add-teacher", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

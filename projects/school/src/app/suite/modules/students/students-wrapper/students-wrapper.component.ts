import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-wrapper',
  templateUrl: './students-wrapper.component.html',
  styleUrls: ['./students-wrapper.component.css']
})
export class StudentsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Students", url: "/suite/students/all-students", icon: "fa fa-fw fa-list" },
    { text: "New Student", url: "/suite/students/new-student", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

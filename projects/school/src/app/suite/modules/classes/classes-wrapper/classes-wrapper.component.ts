import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-wrapper',
  templateUrl: './classes-wrapper.component.html',
  styleUrls: ['./classes-wrapper.component.css']
})
export class ClassesWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Classes", url: "/suite/classes/all-classes", icon: "fa fa-fw fa-list" },
    { text: "New Class", url: "/suite/classes/new-class", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

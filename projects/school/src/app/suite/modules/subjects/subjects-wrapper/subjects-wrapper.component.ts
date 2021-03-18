import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects-wrapper',
  templateUrl: './subjects-wrapper.component.html',
  styleUrls: ['./subjects-wrapper.component.css']
})
export class SubjectsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Subjects", url: "/suite/subjects/all-subjects", icon: "fa fa-fw fa-list" },
    { text: "Add Subject", url: "/suite/subjects/add-subject", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

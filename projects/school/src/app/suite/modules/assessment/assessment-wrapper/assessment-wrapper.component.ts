import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment-wrapper',
  templateUrl: './assessment-wrapper.component.html',
  styleUrls: ['./assessment-wrapper.component.css']
})
export class AssessmentWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Assessment", url: "/suite/assessment/all-assessment", icon: "fa fa-fw fa-list" },
    { text: "New Assessment", url: "/suite/assessment/new-assessment", icon: "fa fa-fw fa-plus" },
  ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appraisal-wrapper',
  templateUrl: './appraisal-wrapper.component.html',
  styleUrls: ['./appraisal-wrapper.component.css']
})
export class AppraisalWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Appraisal", url: "/suite/appraisal/all-appraisal", icon: "fa fa-fw fa-list" },
  ]

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-wrapper',
  templateUrl: './terms-wrapper.component.html',
  styleUrls: ['./terms-wrapper.component.css']
})
export class TermsWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    { text: "All Terms", url: "/suite/terms/all-terms", icon: "fa fa-fw fa-list" },
    { text: "New Term", url: "/suite/terms/new-term", icon: "fa fa-fw fa-plus" }
  ]

  ngOnInit(): void {
  }

}

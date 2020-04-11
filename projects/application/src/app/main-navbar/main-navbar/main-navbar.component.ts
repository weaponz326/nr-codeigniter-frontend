// navbar for main landing page and all suite landing pages
// navbrand and other links are passed on to the component to allow it to be used in all the projects

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() navBrand: "string"
  @Input() navBrandLink: "string"
  @Input() loginLink: "string"
  @Input() signupLink: "string"

}

// container body forform elemetns of main page and all suites
// also contains styles for all forms

import { Component, OnInit, Input } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {

  constructor(private router: Router) { }

  formHeading = "placeholder Heading";

  ngOnInit(): void {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd){
        console.log(e.urlAfterRedirects);
        
        if (e.urlAfterRedirects == "/signup/profile" || e.urlAfterRedirects == "signup"){
          console.log("this is profile");
        }
      }
    })
  }

}

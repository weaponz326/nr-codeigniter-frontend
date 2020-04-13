// page wrapper for all signup form components
// puts form component inside inside form container
// it is the components that is lazy loaded when signup is called

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-wrapper',
  templateUrl: './signup-wrapper.component.html',
  styleUrls: ['./signup-wrapper.component.css']
})
export class SignupWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

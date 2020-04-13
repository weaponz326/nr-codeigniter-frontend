// page wrapper for all login form components
// puts form component inside inside form container
// it is the components that is lazy loaded when login is called

import { Component, OnInit } from '@angular/core';
import { Container } from '@angular/compiler/src/i18n/i18n_ast'

@Component({
  selector: 'app-login-wrapper',
  templateUrl: './login-wrapper.component.html',
  styleUrls: ['./login-wrapper.component.css']
})
export class LoginWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

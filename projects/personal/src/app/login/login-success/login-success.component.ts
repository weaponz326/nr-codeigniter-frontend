// if source a suite registration, user gets routed here to continue with registration
// user clicks on a button to continue to the next registration page

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

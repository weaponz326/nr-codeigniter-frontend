// user gets routed here after successful registtration
// if source is a suite registration, user clicks on a button to continue to the next registration page
// if source is main or personal, user clicks on button to redirect main or personal page respectively

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-success',
  templateUrl: './signup-success.component.html',
  styleUrls: ['./signup-success.component.css']
})
export class SignupSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

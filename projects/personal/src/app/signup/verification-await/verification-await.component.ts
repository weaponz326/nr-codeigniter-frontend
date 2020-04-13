// signup user verification via mail
// user gets routed here after personal signup account step or submiting verification email
// component uses long polling to get status of mail verification
// Verify button is deactivated until user has verified his mail

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-verification-await',
  templateUrl: './verification-await.component.html',
  styleUrls: ['./verification-await.component.css']
})
export class VerificationAwaitComponent implements OnInit {

  constructor(private router: Router) { }

  gotoSuccess(){
    this.router.navigateByUrl("/signup/success");
  }

  ngOnInit(): void {
  }

}

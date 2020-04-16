// signup user verification via mail
// user gets routed here after personal signup account step or submiting verification email
// component uses long polling to get status of mail verification
// Verify button is deactivated until user has verified his mail

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { SignupApiService } from '../signup-api.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-verification-await',
  templateUrl: './verification-await.component.html',
  styleUrls: ['./verification-await.component.css']
})
export class VerificationAwaitComponent implements OnInit {

  constructor(private router: Router, private signupApi: SignupApiService) { }

  gotoSuccess(){
    this.router.navigateByUrl("/signup/success");
  }

  ngOnInit(): void {
    let verStatus = false;

    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.signupApi.pollVerstatus())
      )
      .subscribe(res => {
        verStatus = res.ver_status;
        console.log(res.ver_status);
      })
  }

}

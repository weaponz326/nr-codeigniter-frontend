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

  verStatus = false;
  verMsg = "Verify your email to finish with the registration";

  ngOnInit(): void {
    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.signupApi.pollVerification())
      )
      .subscribe(
        res => {
          console.log(res.ver_status);

          if (res.verStatus == true){
            this.verMsg = "Email verified! Click button to continue...";
            this.verStatus = true;
          }
        },
        err => {
          console.log(err);
        }
      )
  }

  gotoSuccess(){
    this.router.navigateByUrl("/signup/success");
  }

}

// user gets routed here after submiting recovery email
// component uses long polling to get status of mail verification
// Verify button is deactivated until user has verified his mail

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginApiService } from '../login-api.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-recovery-await',
  templateUrl: './recovery-await.component.html',
  styleUrls: ['./recovery-await.component.css']
})
export class RecoveryAwaitComponent implements OnInit {

  constructor(private router: Router, private loginApi: LoginApiService) { }

  ngOnInit(): void {
    let verStatus = false;

    interval(5000)
      .pipe(
        startWith(0),
        switchMap(() => this.loginApi.pollVerstatus())
      )
      .subscribe(res => {
        verStatus = res.ver_status;
        console.log(res.ver_status);
      })
  }

  gotoReset(){
    this.router.navigateByUrl("login/reset");
  }

}

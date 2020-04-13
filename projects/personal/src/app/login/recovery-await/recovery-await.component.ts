// user gets routed here after submiting recovery email
// component uses long polling to get status of mail verification
// Verify button is deactivated until user has verified his mail

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-recovery-await',
  templateUrl: './recovery-await.component.html',
  styleUrls: ['./recovery-await.component.css']
})
export class RecoveryAwaitComponent implements OnInit {

  constructor(private router: Router) { }

  gotoReset(){
    this.router.navigateByUrl("login/reset");
  }

  ngOnInit(): void {
  }

}

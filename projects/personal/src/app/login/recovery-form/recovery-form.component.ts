0// user submits account recovery email
// user is routed to recovery await page after successful submision

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginApiService } from '../login-api.service';

@Component({
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html',
  styleUrls: ['./recovery-form.component.css']
})
export class RecoveryFormComponent implements OnInit {

  recoveryForm = this.fb.group({
    email: ["", Validators.required]
  });

  emailErrors: any[] = [];
  nfErrors: any[] = [];

  constructor(private fb: FormBuilder, private router: Router, private loginApi: LoginApiService) { }

  ngOnInit(): void {
  }

  recoverySubmit(){
    console.log(this.recoveryForm.value);
    this.loginApi.postRecoveryEmail(this.recoveryForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl("/login/await");
        },
        err => {
          console.log(err);
          this.emailErrors = err.error.email;
          this.nfErrors = err.error.non_field_errors;
        }
      )
  }

}

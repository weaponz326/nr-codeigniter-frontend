// user submits new password
// user is routed to recovery success page

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginApiService } from '../login-api.service';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent implements OnInit {

  resetForm = this.fb.group({
    password: ["", Validators.required],
    confirm: ["", Validators.required]
  })

  pass1Errors: any[] = [];
  pass2Errors: any[] = [];
  nfErrors: any[] = [];

  constructor(private fb: FormBuilder, private router: Router, private loginApi: LoginApiService) { }

  ngOnInit(): void {
  }

  resetSubmit(){
    this.loginApi.sendReset(this.resetForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl("/login/rec-success");
        },
        err => {
          console.log(err);
          this.pass1Errors = err.error.password1;
          this.pass2Errors = err.error.password2;
          this.nfErrors = err.error.non_field_errors;
        }
      )
  }

}

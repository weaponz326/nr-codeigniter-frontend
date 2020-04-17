// for users who registered without verifying their account via mail
// user submits account verification email
// user is routed to verification await page after successful submision

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { SignupApiService } from '../signup-api.service';

@Component({
  selector: 'app-verification-form',
  templateUrl: './verification-form.component.html',
  styleUrls: ['./verification-form.component.css']
})
export class VerificationFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private signupApi: SignupApiService) { }

  verificationForm = this.fb.group({
    email: ["", Validators.required]
  });

  verificationSubmit(){
    this.signupApi.sendVerForm(this.verificationForm.value)
      .subscribe(data => {
        console.log(this.verificationForm.value);
        this.router.navigateByUrl("signup/await");
      })
  }

  ngOnInit(): void {
  }

}
// for users who registered without verifying their account via mail
// user submits account verification email
// user is routed to verification await page after successful submision

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-verification-form',
  templateUrl: './verification-form.component.html',
  styleUrls: ['./verification-form.component.css']
})
export class VerificationFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  verificationForm = this.fb.group({
    email: ["", Validators.required]
  });

  verificationSubmit(){
    console.log(this.verificationForm.value);
  }

  ngOnInit(): void {
  }

}

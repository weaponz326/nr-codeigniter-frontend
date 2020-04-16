// account step of signup proccess
// user is routed to signup success upon successful submision

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { SignupApiService } from '../signup-api.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private signupApi: SignupApiService) { }

  accountForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
    confirm: ["", Validators.required]
  })

  accountSubmit(){
    this.signupApi.sendAccount(this.accountForm.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigateByUrl("/signup/await");
      })
  }

  gotoProfile(){
    this.router.navigateByUrl("signup/profile");
  }

  gotoLogin(e){
    e.preventDefault();
    this.router.navigateByUrl("/login");
  }

  gotoVerification(e){
    e.preventDefault();
    this.router.navigateByUrl("/signup/verification");
  }

  ngOnInit(): void {
  }

}

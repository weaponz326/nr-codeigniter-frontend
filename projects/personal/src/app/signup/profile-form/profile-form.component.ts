// profile step of signup proccess
// user is routed to account step after successful submission

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { SignupApiService } from '../signup-api.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private signupApi: SignupApiService) { }

  profileForm = this.fb.group({
    first_name: ["", Validators.required],
    last_name: ["", Validators.required],
    location: ["", Validators.required],
    about: ["", Validators.required]
  });

  profileSubmit(){
    this.signupApi.postProfile(this.profileForm.value)
      .subscribe(
        res => {
          console.log(res);
          if(res.status == true){
            this.router.navigateByUrl("/signup/account");
          }
        },
        err => {
          console.log(err);
        }
      )

    console.log(this.profileForm.value);
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

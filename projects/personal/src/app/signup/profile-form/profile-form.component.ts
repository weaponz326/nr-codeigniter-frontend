// profile step of signup proccess
// user is routed to account step after successful submission

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  profileForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    location: ["", Validators.required],
    about: ["", Validators.required]
  });

  profileSubmit(){
    this.router.navigateByUrl("/signup/account");

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

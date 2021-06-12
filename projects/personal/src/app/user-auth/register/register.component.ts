import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { UserAuthApiService } from '../user-auth-api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authApi: UserAuthApiService
  ) { }

  registerForm = this.fb.group({
    first_name: ["", Validators.required],
    last_name: ["", Validators.required],
    location: ["", Validators.required],
    about: ["", Validators.required]
  });

  fnErrors: any[] = [];
  lnErrors: any[] = [];
  locErrors: any[] = [];
  abtErrors: any[] = [];

  showPrompt = false;

  ngOnInit(): void {
  }

  registerSubmit(){
    this.authApi.postRegister(this.registerForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.showPrompt = true;
        },
        err => {
          console.log(err);
          this.fnErrors = err.errors.first_name;
          this.lnErrors = err.errors.last_name;
          this.locErrors = err.errors.location;
          this.abtErrors = err.errors.about;
        }
      )

    console.log(this.registerForm.value);
  }

}

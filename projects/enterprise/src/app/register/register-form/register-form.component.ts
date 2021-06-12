import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { RegisterApiService } from '../register-api.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerApi: RegisterApiService
  ) { }

  registerForm = this.fb.group({
    name: ["", Validators.required],
    location: ["", Validators.required],
    about: ["", Validators.required]
  });

  nameErrors: any[] = [];
  locErrors: any[] = [];
  abtErrors: any[] = [];

  showPrompt = false;

  ngOnInit(): void {
  }

  registerSubmit(){
    this.registerApi.postProfile(this.registerForm)
      .subscribe(
        res => {
          console.log(res);

          if(res.status == true){
            this.showPrompt = true;
          }else if(res.status == false){
            this.nameErrors = res.errors.name;
            this.locErrors = res.errors.location;
            this.abtErrors = res.errors.about;
          }
        },
        err => {
          console.log(err);
        }
      )

    console.log(this.registerForm.value);
  }

}

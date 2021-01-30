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

  mergedObject: any;       // for storing merged user id and register form profiles

  personalId: any = {
    personal_id: localStorage.getItem('personal_id')
  }

  registerForm = this.fb.group({
    name: ["", Validators.required],
    location: ["", Validators.required],
    about: ["", Validators.required]
  });

  nameErrors: any[] = [];
  locErrors: any[] = [];
  abtErrors: any[] = [];

  ngOnInit(): void {
  }

  registerSubmit(){
    // merge personal id and profile form jsons
    this.mergedObject = Object.assign(this.registerForm.value, this.personalId);
    console.log(this.mergedObject);

    this.registerApi.postProfile(this.mergedObject)
      .subscribe(
        res => {
          console.log(res);

          if(res.status == true){
            this.router.navigateByUrl("/register/success");
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  registerForm = this.fb.group({
    enterpriseName: ["", Validators.required],
    location: ["", Validators.required],
    about: ["", Validators.required]
  });

  registerSubmit(){
    this.router.navigateByUrl("/register/success");
  }

  ngOnInit(): void {
  }

}

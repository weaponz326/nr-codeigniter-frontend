import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { UserAuthApiService } from '../user-auth-api.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  resetForm = this.fb.group({
    password: ["", Validators.required],
    confirm: ["", Validators.required]
  })

  pass1Errors: any[] = [];
  pass2Errors: any[] = [];
  nfErrors: any[] = [];

  showPrompt = false;

  constructor(private fb: FormBuilder, private router: Router, private authApi: UserAuthApiService) { }

  ngOnInit(): void {
  }

  resetSubmit(){
    this.authApi.sendReset(this.resetForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.showPrompt = true;
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

// user submits new password
// user is routed to recovery success page

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginApiService } from '../login-api.service';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private loginApi: LoginApiService) { }

  resetForm = this.fb.group({
    password: ["", Validators.required],
    confirm: ["", Validators.required]
  })

  resetSubmit(){
    this.loginApi.sendReset(this.resetForm.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigateByUrl("/login/recsuccess");
      })
  }

  ngOnInit(): void {
  }

}

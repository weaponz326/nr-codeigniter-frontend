// user submits account recovery email
// user is routed to recovery await page after successful submision

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginApiService } from '../login-api.service';

@Component({
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html',
  styleUrls: ['./recovery-form.component.css']
})
export class RecoveryFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private loginApi: LoginApiService) { }

  recoveryForm = this.fb.group({
    email: ["", Validators.required]
  });

  recoverySubmit(){
    this.loginApi.sendRecForm(this.recoveryForm.value)
      .subscribe(data => {
        console.log(this.recoveryForm.value);
        this.router.navigateByUrl("login/await");
      })
  }


  ngOnInit(): void {
  }

}

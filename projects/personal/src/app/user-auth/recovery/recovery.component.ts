import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { UserAuthApiService } from '../user-auth-api.service';


@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  recoveryForm = this.fb.group({
    email: ["", Validators.required]
  });

  emailErrors: any[] = [];
  nfErrors: any[] = [];

  showPrompt = false;

  constructor(private fb: FormBuilder, private router: Router, private authApi: UserAuthApiService) { }

  ngOnInit(): void {
  }

  recoverySubmit(){
    console.log(this.recoveryForm.value);
    this.authApi.postRecoveryEmail(this.recoveryForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.showPrompt =  true;
        },
        err => {
          console.log(err);
          this.emailErrors = err.error.email;
          this.nfErrors = err.error.non_field_errors;
        }
      )
  }


}

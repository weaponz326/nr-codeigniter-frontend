// user submits new password
// user is routed to recovery success page

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  resetForm = this.fb.group({
    password: ["", Validators.required],
    confirm: ["", Validators.required]
  })

  resetSubmit(){
    this.router.navigateByUrl("login/recsuccess");

    console.log(this.resetForm.value);
  }

  ngOnInit(): void {
  }

}

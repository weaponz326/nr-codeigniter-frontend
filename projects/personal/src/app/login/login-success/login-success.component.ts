// if source a suite registration, user gets routed here to continue with registration
// user clicks on a button to continue to the next registration page

import { Component, OnInit } from '@angular/core';
import { LoginApiService } from '../login-api.service';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  constructor(private loginApi: LoginApiService) { }

  checkSource(){
    let userSource = "";

    this.loginApi.getSource()
      .subscribe(res => {
        userSource = res.user_source;
        console.log(res.user_source);
      })

    return userSource;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainNavbarApiService } from 'projects/application/src/app/main-navbar/main-navbar-api.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(private router: Router, private navbarApi: MainNavbarApiService) { }

  name: any;

  ngOnInit(): void {
    this.navbarApi.getUser()
      .subscribe(
        res => {
          this.name = res.name;
          console.log(res.name);
        },
        err => {
          console.log(err);
        }
      )
  }

  goToUserPage(){
    this.router.navigateByUrl("/user");
  }

}

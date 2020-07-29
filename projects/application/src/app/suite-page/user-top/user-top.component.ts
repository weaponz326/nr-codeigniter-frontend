import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MainNavbarApiService } from 'projects/application/src/app/main-navbar/main-navbar-api.service';



@Component({
  selector: 'app-user-top',
  templateUrl: './user-top.component.html',
  styleUrls: ['./user-top.component.css']
})
export class UserTopComponent implements OnInit {

  constructor(private router: Router, private navbarApi: MainNavbarApiService) { }

  @Input() source: string
  @Input() suiteName: string
  @Input() accounts: object

  @Output() selectAccount = new EventEmitter<number>();

  noAccountMsg: string;

  accountSelected(accountId){
    this.selectAccount.emit(accountId);
  }

  register(){
    this.router.navigateByUrl('/register');     // all suites have the register route
  }

  ngOnInit(): void {
    // TODO user source always returns "application"
    // set redirection message according to user source
    this.navbarApi.getSource()
      .subscribe(
        res => {
          if (res.user_source == "hospital"){
            this.noAccountMsg = "you don't have any Hospital accounts";
          }else if (res.user_source == "restaurant"){
            this.noAccountMsg = "you don't have any Restaurant accounts";
          }else if (res.user_source == "school"){
            this.noAccountMsg = "you don't have any School accounts";
          }else if (res.user_source == "enterprise"){
            this.noAccountMsg = "you don't have any Enterprise accounts";
          }else if (res.user_source == "hotel"){
            this.noAccountMsg = "you don't have any Hotel accounts";
          }else if (res.user_source == "shop"){
            this.noAccountMsg = "you don't have any Shop accounts";
          }else if (res.user_source == "production"){
            this.noAccountMsg = "you don't have any Production accounts";
          }else{
            this.noAccountMsg = "you don't have any accounts";
          }

          console.log(res.user_source);
        },
        err => {
          console.log(err);
        }
      )
  }

}

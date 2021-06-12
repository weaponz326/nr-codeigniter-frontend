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
    console.log(accountId);
  }

  register(){
    this.router.navigateByUrl('/register');     // all suites have the register route
  }

  ngOnInit(): void {
    // set redirection message according to user source

    if (this.source == "hospital"){
      this.noAccountMsg = "you don't have any Hospital accounts";
    }else if (this.source == "restaurant"){
      this.noAccountMsg = "you don't have any Restaurant accounts";
    }else if (this.source == "school"){
      this.noAccountMsg = "you don't have any School accounts";
    }else if (this.source == "enterprise"){
      this.noAccountMsg = "you don't have any Enterprise accounts";
    }else if (this.source == "hotel"){
      this.noAccountMsg = "you don't have any Hotel accounts";
    }else if (this.source == "shop"){
      this.noAccountMsg = "you don't have any Shop accounts";
    }else if (this.source == "production"){
      this.noAccountMsg = "you don't have any Production accounts";
    }else{
      this.noAccountMsg = "you don't have any accounts";
    }

    console.log(this.source);
  }

}

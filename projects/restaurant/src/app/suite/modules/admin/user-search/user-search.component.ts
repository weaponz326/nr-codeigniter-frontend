import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdminApiService } from '../admin-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminApi: AdminApiService
  ) { }

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "New Invitation", url: "/suite/admin/search" },
  ];

  searchInput = '';

  isSearchResultsReady = false;
  isSearchDetailReady = false;
  searchResults: any;
  searchDetail: any;
  searchQuery;

  ngOnInit(): void {
    console.log(sessionStorage.getItem('searchInput'));

    if(sessionStorage.getItem('searchInput')){
      this.searchInput = sessionStorage.getItem('searchInput');
      this.searchQuery = sessionStorage.getItem('searchInput');

      this.doSearch();
    }
  }

  doSearch(){
    // put search input in url
    this.router.navigate(['/suite/admin/search/search-results', { input: this.searchInput }]);

    sessionStorage.setItem('searchInput', this.searchInput);
    sessionStorage.setItem('searchInput', this.searchInput);
    this.searchQuery = this.searchInput;

    this.getSearch();
  }

  getSearch(){
    this.adminApi.getSearch(this.searchInput)
      .subscribe(
        res => {
          console.log(res);
          this.searchResults = res;

          this.isSearchResultsReady = true;
          this.isSearchDetailReady = false;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getDetail(){
    this.adminApi.getDetail(sessionStorage.getItem('searchUser'))
      .subscribe(
        res => {
          console.log(res);
          this.searchDetail = res;

          this.isSearchResultsReady = false;
          this.isSearchDetailReady = true;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  gotoSearchDetail(userId){
    sessionStorage.setItem('searchUser', userId);
    this.getDetail();

    this.router.navigateByUrl('suite/admin/search/search-detail');
  }

}

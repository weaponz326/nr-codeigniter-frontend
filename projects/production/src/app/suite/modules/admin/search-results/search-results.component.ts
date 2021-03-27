import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  searchResults: any;
  searchInput = sessionStorage.getItem('searchInput');

  ngOnInit(): void {
    // this.adminApi.getSearch(sessionStorage.getItem('searchInput'), sessionStorage.getItem('searchFilter'))
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.searchResults = res;
    //     },
    //     err => {
    //       console.log(err);
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }

  goToDetail(personalId){
    sessionStorage.setItem('searchUser', personalId)
    this.router.navigateByUrl('/suite/admin/search/search-detail');
  }

}

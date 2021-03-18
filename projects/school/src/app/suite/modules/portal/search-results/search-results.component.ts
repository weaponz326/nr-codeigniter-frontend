import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PortalApiService } from '../portal-api.service'
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
    private portalApi: PortalApiService
  ) { }

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  searchResults: any;
  searchInput = sessionStorage.getItem('searchInput');

  ngOnInit(): void {
    this.portalApi.getSearch(sessionStorage.getItem('searchInput'), sessionStorage.getItem('searchFilter'))
      .subscribe(
        res => {
          console.log(res);
          this.searchResults = res;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  goToDetail(schoolId){
    sessionStorage.setItem('searchUser', schoolId)
    this.router.navigateByUrl('/suite/portal/search/search-detail');
  }

}

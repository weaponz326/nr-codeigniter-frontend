import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PortalApiService } from '../portal-api.service';
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private portalApi: PortalApiService
  ) { }

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "New Rink", url: "/suite/portal/search" },
  ];

  searchFilterValues: any[] = ['All', 'Personal', 'Restaurant', 'School', 'Enterprise', 'Association', 'Hospital', 'Hotel', 'Shop', 'Production'];

  searchInput = '';
  searchFilter = 'Personal';

  isSearchResultsReady = false;
  isSearchDetailReady = false;
  searchResults: any;
  searchDetail: any;
  searchQuery;

  ngOnInit(): void {
    console.log(sessionStorage.getItem('searchInput'));

    if(sessionStorage.getItem('searchInput')){
      this.searchInput = sessionStorage.getItem('searchInput');
      this.searchFilter = sessionStorage.getItem('searchFilter');
      this.searchQuery = sessionStorage.getItem('searchInput');

      this.doSearch();
    }
  }

  ngAfterViewInit(): void {
  }

  doSearch(){
    // put search input in url
    this.router.navigate(['/suite/portal/search/search-results', { input: this.searchInput, filter: this.searchFilter }]);

    sessionStorage.setItem('searchInput', this.searchInput);
    sessionStorage.setItem('searchFilter', this.searchFilter);
    sessionStorage.setItem('searchInput', this.searchInput);
    this.searchQuery = this.searchInput;

    this.getSearch();
  }

  setSearchFilter(event, value){
    event.preventDefault();
    this.searchFilter = value;
  }

  getSearch(){
    this.portalApi.getSearch(this.searchInput, this.searchFilter)
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
    this.portalApi.getDetail(sessionStorage.getItem('searchUser'))
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

    this.router.navigateByUrl('suite/portal/search/search-detail');
  }

}

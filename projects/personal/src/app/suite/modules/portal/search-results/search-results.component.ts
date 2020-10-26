import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PortalApiService } from '../portal-api.service'


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchResults: any;
  searchInput = sessionStorage.getItem('searchInput');

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private portalApi: PortalApiService
  ) { }

  ngOnInit(): void {
    this.portalApi.getSearch(sessionStorage.getItem('searchInput'), sessionStorage.getItem('searchFilter'))
      .subscribe(
        res => {
          console.log(res);
          this.searchResults = res;
        },
        err => {
          console.log(err);
        }
      )
  }

  goToDetail(userId){
    sessionStorage.setItem('searchUser', userId)
    this.router.navigateByUrl('/suite/portal/search/search-detail');
  }

}

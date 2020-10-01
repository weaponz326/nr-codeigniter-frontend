import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PortalApiService } from '../portal-api.service'


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchInput: any;
  searchResults: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private portalApi: PortalApiService
  ) {
    this.route.params.subscribe(params => {
      console.log(params);

      if (params['input']){
        this.searchInput = params['input'];
      }
    });
  }

  ngOnInit(): void {
    this.portalApi.getSearch(this.searchInput)
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

  goToDetail(){
    this.router.navigateByUrl('/suite/portal/search/search-detail');
  }

}

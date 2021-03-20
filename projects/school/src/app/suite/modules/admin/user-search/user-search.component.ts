import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

import { AdminApiService } from '../admin-api.service';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private AdminApi: AdminApiService,
  ) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['input']){
        this.searchInput.val(params['input']);
        this.sendSearch(params['term']);
      }
    });
  }

  @ViewChild('searchInputReference') searchInput: jqxInputComponent;
  @ViewChild('searchButtonReference') searchButton: jqxButtonComponent;

  ngOnInit(): void {
  }

  sendSearch(input: string){

    // route to search results as soon as search begins
    console.log("u are searching for: " + this.searchInput.val());
    this.router.navigate(['/suite/admin/search/search-results', { input: input }]);

    // this.adminApi.getSearch(this.searchInput.val())
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.router.navigate(['/suite/admin/search/search-results'], { state: res });
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   )
  }

}

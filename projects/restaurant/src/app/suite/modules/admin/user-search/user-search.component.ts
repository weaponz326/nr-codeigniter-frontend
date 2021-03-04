import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

import { AdminApiService } from '../admin-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('searchInputReference') searchInput: jqxInputComponent;
  @ViewChild('searchButtonReference') searchButton: jqxButtonComponent;

  navHeading: any[] = [
    { text: "New User", url: "/suite/admin/search" },
    { text: "Search", url: "/suite/admin/search" },
  ];

  ngOnInit(): void {
  }

  sendSearch(input: string){
    console.log("u are searching for: " + this.searchInput.val());
    // route to search results as soon as search begins
    // put search input in url
    this.router.navigate(['/suite/admin/search/search-results', { input: input }]);

    sessionStorage.setItem('searchInput', input);
  }

}

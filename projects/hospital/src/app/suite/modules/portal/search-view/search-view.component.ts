import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { SuiteRoutesService } from '../../../suite-routes.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('searchInputReference') searchInput: jqxInputComponent;
  @ViewChild('searchButtonReference') searchButton: jqxButtonComponent;
  @ViewChild('searchDropDownListReference') searchDropDownList: jqxDropDownListComponent;
  @ViewChild('recentContactsButtonReference') recentContactsButton: jqxButtonComponent;
  @ViewChild('myContactsButtonReference') myContactsButton: jqxButtonComponent;

  navHeading: any[] = [
    { text: "New Rink", url: "/suite/portal/search" },
    { text: "Search", url: "/suite/portal/search/recent-contacts" },
  ];

  searchFilter: any[] = ['Hospital', 'Personal'];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // set value of serach input and filter
    this.searchInput.val(sessionStorage.getItem('searchInput'));
    this.searchDropDownList.val(sessionStorage.getItem('searchFilter'));

    console.log(sessionStorage.getItem('searchInput'));
    console.log(sessionStorage.getItem('searchFilter'));
  }

  doSearch(input: string, filter: string){
    console.log("u are searching for: " + this.searchInput.val() + " with filter: " + this.searchDropDownList.val());
    // route to search results as soon as search begins
    // put search input in url
    this.router.navigate(['/suite/portal/search/search-results', { input: input, filter: filter }]);

    sessionStorage.setItem('searchInput', input);
    sessionStorage.setItem('searchFilter', filter);
  }

  goRecentContacts(){
    this.router.navigateByUrl('/suite/portal/search/recent-contacts');
  }

}

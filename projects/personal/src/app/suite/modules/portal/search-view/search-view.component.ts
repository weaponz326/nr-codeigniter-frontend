import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInputReference') searchInput: jqxInputComponent;
  @ViewChild('searchButtonReference') searchButton: jqxButtonComponent;
  @ViewChild('recentContactsButtonReference') recentContactsButton: jqxButtonComponent;
  @ViewChild('myContactsButtonReference') myContactsButton: jqxButtonComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // set value of serach input
    this.route.params.subscribe(params => {
      console.log(params);

      if (params['input']){
        this.searchInput.val(params['input']);
      }
    });
  }

  doSearch(input: string){
    console.log("u are searching for: " + this.searchInput.val());
    // route to search results as soon as search begins
    // put search input in url
    this.router.navigate(['/suite/portal/search/search-results', { input: input }]);
  }

  goRecentContacts(){
    this.router.navigateByUrl('/suite/portal/search/recent-contacts');
  }

}

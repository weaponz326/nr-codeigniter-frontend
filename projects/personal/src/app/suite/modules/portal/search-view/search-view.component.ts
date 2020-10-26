import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInputReference') searchInput: jqxInputComponent;
  @ViewChild('searchButtonReference') searchButton: jqxButtonComponent;
  @ViewChild('searchComboBoxReference') searchComboBox: jqxComboBoxComponent;
  @ViewChild('recentContactsButtonReference') recentContactsButton: jqxButtonComponent;
  @ViewChild('myContactsButtonReference') myContactsButton: jqxButtonComponent;

  searchFilter: any[] = ['All', 'Personal', 'Hospital', 'Restaurant', 'School', 'Enterprise', 'Hotel', 'Shop', 'Production'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // set value of serach input and filter
    this.searchInput.val(sessionStorage.getItem('searchInput'));
    this.searchComboBox.val(sessionStorage.getItem('searchFilter'));

    console.log(sessionStorage.getItem('searchInput'));
    console.log(sessionStorage.getItem('searchFilter'));
  }

  doSearch(input: string, filter: string){
    console.log("u are searching for: " + this.searchInput.val() + " with filter: " + this.searchComboBox.val());
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

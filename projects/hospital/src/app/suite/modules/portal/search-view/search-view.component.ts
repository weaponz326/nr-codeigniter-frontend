import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

import { PortalApiService } from '../portal-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private portalApi: PortalApiService,
    public suiteRoutes: SuiteRoutesService
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
    this.router.navigate(['/suite/portal/search/search-results', { input: input }]);

  //   this.portalApi.getSearch(this.searchInput.val())
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.router.navigate(['/suite/portal/search/search-results'], { state: res });
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     )
  }

}

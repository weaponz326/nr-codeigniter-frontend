import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;

  ngOnInit(): void {
  }

  goToNew(){
    this.router.navigateByUrl('suite/portal/new-rink');
  }

}

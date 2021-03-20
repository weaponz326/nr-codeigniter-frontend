import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PortalApiService } from '../portal-api.service';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private portalApi: PortalApiService) { }

  @ViewChild('goToSearchButtonReference') goToSearchbutton: jqxButtonComponent;
  @ViewChild('newButtonReference') newSearchbutton: jqxButtonComponent;

  ngOnInit(): void {
  }

}

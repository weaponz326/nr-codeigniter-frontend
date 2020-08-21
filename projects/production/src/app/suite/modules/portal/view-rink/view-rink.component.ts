import { Component, OnInit } from '@angular/core';

import { PortalApiService } from '../portal-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-view-rink',
  templateUrl: './view-rink.component.html',
  styleUrls: ['./view-rink.component.css']
})
export class ViewRinkComponent implements OnInit {

  constructor(private portalApi: PortalApiService, public suiteRoutes: SuiteRoutesService) { }

  ngOnInit(): void {
  }

}

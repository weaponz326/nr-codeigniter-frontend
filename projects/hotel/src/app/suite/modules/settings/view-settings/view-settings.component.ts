import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SettingsApiService } from '../settings-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-view-settings',
  templateUrl: './view-settings.component.html',
  styleUrls: ['./view-settings.component.css']
})
export class ViewSettingsComponent implements OnInit {

  constructor(
    private router: Router,
    private settingsApi: SettingsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  goToProfile(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/settings/view-settings/profile');
  }

  goToGeneral(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/settings/view-settings/general');
  }

  goToPrivacy(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/settings/view-settings/privacy');
  }

  goToBillings(e){
    e.preventDefault();
    this.router.navigateByUrl('/suite/settings/view-settings/billings');
  }

}

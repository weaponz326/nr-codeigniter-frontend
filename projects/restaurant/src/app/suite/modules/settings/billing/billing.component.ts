import { Component, OnInit, ViewChild } from '@angular/core';

import { SettingsApiService } from '../settings-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "Billing", url: "/suite/settings/billing" },
  ];

  selectedSubscription = '';
  selectedPlan = '';

  ngOnInit(): void {
    this.settingsApi.getSubscription()
      .subscribe(
        res => {
          console.log(res);
          this.selectedSubscription = res.subscription;
          this.selectedPlan = res.plan;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )

  }

  saveSubscription(){
    let data = {
      subscription: this.selectedSubscription,
      plan: this.selectedPlan
    }

    this.loadingSpinner.httpLoader.open();
    this.settingsApi.postSubscription(data)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  setSubscription(subscription){
    this.selectedSubscription = subscription;
    console.log(this.selectedSubscription);
  }

  setPlan(plan){
    this.selectedPlan = plan;
    console.log(this.selectedPlan);
  }

}

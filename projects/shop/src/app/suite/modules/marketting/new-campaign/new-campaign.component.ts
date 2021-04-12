import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { MarkettingApiService } from '../marketting-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { CampaignFormComponent } from '../campaign-form/campaign-form.component';


@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.css']
})
export class NewCampaignComponent implements OnInit {

  constructor(
    private router: Router,
    private markettingApi: MarkettingApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('campaignFormComponentReference') campaignForm: CampaignFormComponent;

  navHeading: any[] = [
    { text: "New Campaign", url: "/suite/campaigns/add-campaign" },
  ];

  ngOnInit(): void {
  }

  saveCampaign(){
    console.log('u are saving a new campaign');
    this.loadingSpinner.httpLoader.open();

    var campaignData = {
      shop_id: sessionStorage.getItem('shop_id'),
      campaign_code: this.campaignForm.campaignCode.val(),
      campaign_name: this.campaignForm.campaignName.val(),
      campaign_type: this.campaignForm.campaignType.val(),
      target_audience: this.campaignForm.targetAudience.val(),
      campaign_status: this.campaignForm.campaignStatus.val(),
      supervisor: this.campaignForm.supervisor.val(),
      goals: this.campaignForm.goals.val(),
      start_date: this.campaignForm.startDate.val(),
      end_date: this.campaignForm.endDate.val(),
    }

    console.log(campaignData);

    this.markettingApi.postCampaign(campaignData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('campaign_id', res.campaign_id);
            this.router.navigateByUrl('/suite/marketting/view-campaign');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}

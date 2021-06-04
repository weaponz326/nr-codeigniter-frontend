import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { MarkettingApiService } from '../marketting-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { CampaignFormComponent } from '../campaign-form/campaign-form.component';


@Component({
  selector: 'app-view-campaign',
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.css']
})
export class ViewCampaignComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private markettingApi: MarkettingApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('campaignFormComponentReference') campaignForm: CampaignFormComponent;

  navHeading: any[] = [
    { text: "All Marketting", url: "/suite/marketting/all-marketting" },
    { text: "View Campaign", url: "/suite/marketting/view-campaign" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.markettingApi.getSingleCampaign()
      .subscribe(
        res => {
          console.log(res);
          this.campaignForm.campaignCode.val(res.campaign_code);
          this.campaignForm.campaignName.val(res.campaign_name);
          this.campaignForm.campaignType.val(res.campaign_type);
          this.campaignForm.targetAudience.val(res.target_audience);
          this.campaignForm.campaignStatus.val(res.campaign_status);
          this.campaignForm.supervisor.val(res.supervisor);
          this.campaignForm.goals.val(res.goals);
          this.campaignForm.startDate.val(res.start_date);
          this.campaignForm.endDate.val(res.end_date);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveCampaign(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a campaign");

    var campaignData = {
      account: sessionStorage.getItem('shop_id'),
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

    this.markettingApi.putCampaign(campaignData)
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

    console.log(campaignData);
  }

  deleteCampaign(){
    console.log("dude... u are gonna delete the campaign?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.markettingApi.deleteCampaign()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/campaign/all-campaign');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}

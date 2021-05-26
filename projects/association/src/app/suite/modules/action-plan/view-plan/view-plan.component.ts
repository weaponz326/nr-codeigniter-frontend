import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ActionPlanApiService } from '../action-plan-api.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html',
  styleUrls: ['./view-plan.component.css']
})
export class ViewPlanComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private plansApi: ActionPlanApiService,
  ) { }

  @ViewChild("planNameReference") planNameInput: jqxInputComponent;
  @ViewChild("startDateReference") startDateInput: jqxDateTimeInputComponent;
  @ViewChild("endDateReference") endDateInput: jqxDateTimeInputComponent;
  @ViewChild("facilitatorReference") facilitatorInput: jqxInputComponent;
  @ViewChild("goalsReference") goalsTextArea: jqxTextAreaComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Plans", url: "/suite/plans/all-plans" },
    { text: "View Plan", url: "/suite/plans/view-plan" },
  ];

  totalBalance = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.plansApi.getSinglePlan()
      .subscribe(
        res => {
          console.log(res);
          this.planNameInput.val(res.plan_name);
          this.startDateInput.val(res.start_date);
          this.endDateInput.val(res.end_date);
          this.facilitatorInput.val(res.facilitator);
          this.goalsTextArea.val(res.goals);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.plansApi.deletePlan()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/plans/all-plans');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

  onBalanceCalculated(balance: any){
    this.totalBalance = balance.sum;
    console.log("balance is being calculated");
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  planData: any;

  savePlan(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating the plan");

    this.planData = {
      account: sessionStorage.getItem('association_id'),
      plan_name: this.planNameInput.val(),
      start_date: this.startDateInput.val(),
      end_date: this.endDateInput.val(),
      facilitator: this.facilitatorInput.val(),
      goals: this.goalsTextArea.val()
    }

    this.plansApi.putPlan(this.planData)
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

    console.log(this.planData);
  }

  deletePlan(){
    console.log("dude... u are gonna delete the plan");

    this.deleteConfirmComponent.openWindow();
  }

}

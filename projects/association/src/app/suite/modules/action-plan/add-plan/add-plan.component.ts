import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ActionPlanApiService } from '../action-plan-api.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {

  constructor(
    private router: Router,
    private plansApi: ActionPlanApiService,
  ) { }

  @ViewChild("addPlanReference") addPlanWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("planNameReference") planNameInput: jqxInputComponent;
  @ViewChild("startDateReference") startDateInput: jqxDateTimeInputComponent;
  @ViewChild("endDateReference") endDateInput: jqxDateTimeInputComponent;
  @ViewChild("facilitatorReference") facilitatorInput: jqxInputComponent;
  @ViewChild("goalsReference") goalsTextArea: jqxTextAreaComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  planData: any;

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------

  // open add plan popup dialog window
  openWindow(){
    this.addPlanWindow.open();
  }

  closeWindow(){
    this.addPlanWindow.close();
  }

  savePlan(){
    this.loadingSpinner.httpLoader.open();

    this.planData = {
      user: sessionStorage.getItem('association'),
      plan_name: this.planNameInput.val(),
      start_date: this.startDateInput.val(),
      end_date: this.endDateInput.val(),
      facilitator: this.facilitatorInput.val(),
      goals: this.goalsTextArea.val()
    }

    // this.plansApi.postPlan(this.planData)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.loadingSpinner.httpLoader.close();

    //       if (res.message == "OK"){
    //         sessionStorage.setItem('plan_id', res.data.id);
    //         this.closeWindow()
    //         this.router.navigateByUrl('/suite/plans/view-plan');
    //       }
    //     },
    //     err => {
    //       console.log(err);
    //       this.loadingSpinner.httpLoader.close();
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )

    console.log(this.planData);
  }

}

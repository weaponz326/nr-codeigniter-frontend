import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { LoadingSpinnerComponent } from '../../../utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';
import { DeleteConfirmComponent } from '../../../utilities/delete-confirm/delete-confirm.component';
import { BudgetApiService } from '../budget-api.service';


@Component({
  selector: 'app-view-budget',
  templateUrl: './view-budget.component.html',
  styleUrls: ['./view-budget.component.css']
})
export class ViewBudgetComponent implements OnInit, AfterViewInit {

  @ViewChild('budgetNameReference') budgetNameInput: jqxInputComponent;
  @ViewChild('budgetTypeReference') budgetTypeDropDownList: jqxDropDownListComponent;
  @ViewChild('createdDateReference') createdDate: jqxDateTimeInputComponent;
  @ViewChild('saveBudgetReference') saveButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Budgets", url: "/suite/budget/all-budget" },
    { text: "View Budget", url: "/suite/budget/view-budget" },
  ];

  ioe: any = 0;

  constructor(
    private router: Router,
    private budgetApi: BudgetApiService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.budgetApi.getSingleBudget()
      .subscribe(
        res => {
          console.log(res);
          this.budgetNameInput.val(res.budget_name);
          this.budgetTypeDropDownList.val(res.budget_type);
          this.createdDate.val(new Date(res.created_at));
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      console.log("so u are really bent on deleting the item...");

      this.loadingSpinner.httpLoader.open();

      this.budgetApi.deleteBudget()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/budget/all-budget');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
    else if (value == 'no'){
      console.log("good u changed ur mind");
    }
  }

  onIoeCalculated(calculated: any){
    this.ioe = calculated;
    console.log("ioe has been emitted here");
  }

  // widgets
  // ----------------------------------------------------------------------------------

  // budget type settings
  budgetTypeSource: string[] = ["Weekly", "Monthly", "Quarterly", "Yearly"];

  budgetData: any;

  saveBudget(){
    console.log("u are updating the account");

    this.budgetData = {
      user: localStorage.getItem('personal_id'),
      budget_name: this.budgetNameInput.val(),
      budget_type: this.budgetTypeDropDownList.val(),
    }

    this.loadingSpinner.httpLoader.open();

    this.budgetApi.putBudget(this.budgetData)
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

    console.log(this.budgetData);
  }

  deleteBudget(){
    console.log("dude... u are gonna delete the account");

    this.deleteConfirmComponent.openWindow();
  }

}

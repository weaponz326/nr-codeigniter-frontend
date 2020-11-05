import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { BudgetApiService } from '../budget-api.service';
import { LoadingSpinnerComponent } from '../../../utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';

@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.css']
})
export class NewBudgetComponent implements OnInit {

  @ViewChild('newBudgetReference') newBudgetWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('budgetNameReference') budgetNameInput: jqxInputComponent;
  @ViewChild('budgetTypeReference') budgetTypeDropDownList: jqxDropDownListComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  
  budgetData: any;

  constructor(private router: Router, private budgetApi: BudgetApiService) { }

  ngOnInit(): void {
  }

  // widgets
  // -------------------------------------------------------------------------------------

  // budget type settings
  budgetTypeSource: string[] = ["Weekly", "Monthly", "Quarterly", "Yearly"];

  // open new budget popup window
  openWindow(){
    this.newBudgetWindow.open();
  }

  saveBudget(){
    this.budgetData = {
      user: localStorage.getItem('personal_id'),
      budget_name: this.budgetNameInput.val(),
      budget_type: this.budgetTypeDropDownList.val()
    }

    this.loadingSpinner.httpLoader.open();

    this.budgetApi.postBudget(this.budgetData)
      .subscribe(
        res => {
          console.log(res);
          if (res.status == true){
            this.loadingSpinner.httpLoader.close();
            sessionStorage.setItem('budget_id', res.budget_id);

            this.router.navigateByUrl('/suite/budget/view-budget');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(this.budgetData);
  }

}

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { BudgetApiService } from '../budget-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-view-budget',
  templateUrl: './view-budget.component.html',
  styleUrls: ['./view-budget.component.css']
})
export class ViewBudgetComponent implements OnInit, AfterViewInit {

  @ViewChild('budgetNameReference') budgetNameInput: jqxInputComponent;
  @ViewChild('budgetTypeReference') budgetTypeDropDownList: jqxDropDownListComponent;
  @ViewChild('createdDateReference') createdDate: jqxDateTimeInputComponent;
  @ViewChild('updatedDateReference') updatedDate: jqxDateTimeInputComponent;
  @ViewChild('saveBudgetReference') saveButton: jqxButtonComponent;

  budgetData: any;

  constructor(
    private router: Router,
    private budgetApi: BudgetApiService,
    public suiteRoutes: SuiteRoutesService
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
          this.createdDate.val(res.created_at);
          this.updatedDate.val(res.updated_at);
        },
        err => {
          console.log(err);
        }
      )
  }

  // widgets
  // ----------------------------------------------------------------------------------

  // budget type settings
  budgetTypeSource: string[] = ["Weekly", "Monthly", "Quarterly", "Yearly"];

  saveBudget(){
    console.log("u are updating the account");

    this.budgetData = {
      account_name: this.budgetNameInput.val(),
      account_number: this.budgetTypeDropDownList.val(),
    }

    this.budgetApi.putBudget(this.budgetData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )

    console.log(this.budgetData);
  }

  deleteBudget(){
    console.log("dude... u are gonna delete the account");

    this.budgetApi.deleteBudget()
      .subscribe(
        res => {
          console.log(res);

          this.router.navigateByUrl('/suite/budget/all-budget');
        },
        err => {
          console.log(err);
        }
      )
  }

}

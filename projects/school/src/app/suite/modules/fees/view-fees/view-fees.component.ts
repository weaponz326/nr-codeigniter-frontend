import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { FeesApiService } from '../fees-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { FeesFormComponent } from '../fees-form/fees-form.component'


@Component({
  selector: 'app-view-fees',
  templateUrl: './view-fees.component.html',
  styleUrls: ['./view-fees.component.css']
})
export class ViewFeesComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private feesApi: FeesApiService,
  ) { }

  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('feesFormComponentReference') feesForm: FeesFormComponent;

  navHeading: any[] = [
    { text: "All Fees", url: "/suite/fees/all-fees" },
    { text: "View Fees", url: "/suite/fees/view-fees" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.feesApi.getSingleFees()
      .subscribe(
        res => {
          console.log(res);
          this.feesForm.feesCode.val(res.fees_code);
          this.feesForm.feesDescription.val(res.fees_description);
          this.feesForm.feesDate.val(res.fees_date);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveFees(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a fees");

    var feesData = {
      account: sessionStorage.getItem('school_id'),
      fees_code: this.feesForm.feesCode.val(),
      fees_description: this.feesForm.feesDescription.val(),
      fees_date: this.feesForm.feesDate.val(),
    }

    this.feesApi.putFees(feesData)
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

    console.log(feesData);
  }

  deleteFees(){
    console.log("dude... u are gonna delete the fees?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.feesApi.deleteFees()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/fees/all-fees');
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { FeesApiService } from '../fees-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { FeesFormComponent } from '../fees-form/fees-form.component'


@Component({
  selector: 'app-create-fees',
  templateUrl: './create-fees.component.html',
  styleUrls: ['./create-fees.component.css']
})
export class CreateFeesComponent implements OnInit {

  constructor(
    private router: Router,
    private feesApi: FeesApiService,
  ) { }

  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('feesFormComponentReference') feesForm: FeesFormComponent;

  navHeading: any[] = [
    { text: "Create Fees", url: "/suite/fees/create-fees" },
  ];

  ngOnInit(): void {
  }

  saveFees(){
    this.loadingSpinner.httpLoader.open();

    let feeData = {
      account: sessionStorage.getItem('school_id'),
      fees_code: this.feesForm.feesCode.val(),
      fees_description: this.feesForm.feesDescription.val(),
      fees_date: this.feesForm.feesDate.val(),
    }

    this.feesApi.postFee(feeData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('fees_id', res.data.id);
            this.router.navigateByUrl('/suite/fees/view-fees');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(feeData);
  }

}

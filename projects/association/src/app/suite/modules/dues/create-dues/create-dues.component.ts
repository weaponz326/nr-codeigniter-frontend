import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DuesApiService } from '../dues-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { DuesFormComponent } from '../dues-form/dues-form.component'


@Component({
  selector: 'app-create-dues',
  templateUrl: './create-dues.component.html',
  styleUrls: ['./create-dues.component.css']
})
export class CreateDuesComponent implements OnInit {

  constructor(
    private router: Router,
    private duesApi: DuesApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('duesFormComponentReference') duesForm: DuesFormComponent;

  navHeading: any[] = [
    { text: "Create Dues", url: "/suite/dues/create-dues" },
  ];

  ngOnInit(): void {
  }

  saveDues(){
    console.log('u are saving a new dues');
    this.loadingSpinner.httpLoader.open();

    var duesData = {
      account: sessionStorage.getItem('association_id'),
      dues_name: this.duesForm.duesName.val(),
      dues_code: this.duesForm.duesCode.val(),
      dues_date: this.duesForm.duesDate.val(),
      amount: this.duesForm.amount.val(),
    }

    console.log(duesData);

    this.duesApi.postDues(duesData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('dues_id', res.data.id);
            this.router.navigateByUrl('/suite/dues/view-dues');
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

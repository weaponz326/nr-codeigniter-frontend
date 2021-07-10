import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DuesApiService } from '../dues-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { DuesFormComponent } from '../dues-form/dues-form.component'


@Component({
  selector: 'app-view-dues',
  templateUrl: './view-dues.component.html',
  styleUrls: ['./view-dues.component.css']
})
export class ViewDuesComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private duesApi: DuesApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('duesFormComponentReference') duesForm: DuesFormComponent;

  navHeading: any[] = [
    { text: "All Dues", url: "/suite/dues/all-dues" },
    { text: "View Dues", url: "/suite/dues/view-dues" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.duesApi.getSingleDues()
      .subscribe(
        res => {
          console.log(res);
          this.duesForm.duesName.val(res.dues_name);
          this.duesForm.duesCode.val(res.dues_code);
          this.duesForm.duesDate.val(res.dues_date);
          this.duesForm.amount.val(res.amount);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
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

    this.duesApi.putDues(duesData)
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

  deleteDues(){
    console.log("dude... u are gonna delete the dues?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.duesApi.deleteDues()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/duess/all-duess');
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

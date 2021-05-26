import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { CommitteesApiService } from '../committees-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { CommitteeFormComponent } from '../committee-form/committee-form.component'


@Component({
  selector: 'app-view-committee',
  templateUrl: './view-committee.component.html',
  styleUrls: ['./view-committee.component.css']
})
export class ViewCommitteeComponent implements OnInit {

  constructor(
    private router: Router,
    private committeesApi: CommitteesApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('committeeFormComponentReference') committeeForm: CommitteeFormComponent;

  navHeading: any[] = [
    { text: "All Committees", url: "/suite/committees/all-committees" },
    { text: "View Committee", url: "/suite/committees/view-committee" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.committeesApi.getSingleCommittee()
      .subscribe(
        res => {
          console.log(res);
          this.committeeForm.committeeName.val(res.committee_name);
          this.committeeForm.dateFormed.val(res.date_formed);
          this.committeeForm.description.val(res.description);
          this.committeeForm.committeeStatus.val(res.committee_status);
          this.committeeForm.functions.val(res.functions);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveCommittee(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a committee");

    var committeeData = {
      account: sessionStorage.getItem('association_id'),
      committee_name: this.committeeForm.committeeName.val(),
      date_formed: this.committeeForm.dateFormed.val(),
      description: this.committeeForm.description.val(),
      committee_status: this.committeeForm.committeeStatus.val(),
      functions: this.committeeForm.functions.val(),
    }

    this.committeesApi.putCommittee(committeeData)
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

    console.log(committeeData);
  }

  deleteCommittee(){
    console.log("dude... u are gonna delete the committee?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.committeesApi.deleteCommittee()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/committees/all-committees');
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

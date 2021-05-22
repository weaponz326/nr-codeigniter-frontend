import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { CommitteesApiService } from '../committees-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { CommitteeFormComponent } from '../committee-form/committee-form.component'


@Component({
  selector: 'app-new-committee',
  templateUrl: './new-committee.component.html',
  styleUrls: ['./new-committee.component.css']
})
export class NewCommitteeComponent implements OnInit {

  constructor(
    private router: Router,
    private committeesApi: CommitteesApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('committeeFormComponentReference') committeeForm: CommitteeFormComponent;

  navHeading: any[] = [
    { text: "New Committee", url: "/suite/committees/new-committee" },
  ];

  ngOnInit(): void {
  }

  saveCommittee(){
    console.log('u are saving a new committee');
    this.loadingSpinner.httpLoader.open();

    var committeeData = {
      account: sessionStorage.getItem('association_id'),
      committee_name: this.committeeForm.committeeName.val(),
      date_formed: this.committeeForm.dateFormed.val(),
      description: this.committeeForm.description.val(),
      committee_status: this.committeeForm.committeeStatus.val(),
      functions: this.committeeForm.functions.val(),
    }

    console.log(committeeData);

    // this.committeesApi.postCommittee(committeeData)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.loadingSpinner.httpLoader.close();

    //       if (res.message == "OK"){
    //         sessionStorage.setItem('committee_id', res.data.id);
    //         this.router.navigateByUrl('/suite/committees/view-committee');
    //       }
    //     },
    //     err => {
    //       console.log(err);
    //       this.loadingSpinner.httpLoader.close();
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }


}

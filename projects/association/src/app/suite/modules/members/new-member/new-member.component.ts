import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { MembersApiService } from '../members-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { MemberFormComponent } from '../member-form/member-form.component'


@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  constructor(
    private router: Router,
    private membersApi: MembersApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('memberFormComponentReference') memberForm: MemberFormComponent;

  navHeading: any[] = [
    { text: "New Member", url: "/suite/members/new-member" },
  ];

  ngOnInit(): void {
  }

  saveMember(){
    console.log('u are saving a new member');
    this.loadingSpinner.httpLoader.open();

    var memberData = {
      account: sessionStorage.getItem('association_id'),
      first_name: this.memberForm.firstName.val(),
      last_name: this.memberForm.lastName.val(),
      sex: this.memberForm.sex.val(),
      photo: this.memberForm.image,
      nationality: this.memberForm.nationality.val(),
      religion: this.memberForm.religion.val(),
      occupation: this.memberForm.occupation.val(),
      phone: this.memberForm.phone.val(),
      email: this.memberForm.email.val(),
      address: this.memberForm.address.val(),
      state: this.memberForm.state.val(),
      city: this.memberForm.city.val(),
      post_code: this.memberForm.postCode.val(),
      member_code: this.memberForm.memberCode.val(),
      date_joined: this.memberForm.dateJoined.val(),
      membership_status: this.memberForm.membershipStatus.val(),
    }

    console.log(memberData);

    this.membersApi.postMember(memberData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('member_id', res.data.id);
            this.router.navigateByUrl('/suite/members/view-member');
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

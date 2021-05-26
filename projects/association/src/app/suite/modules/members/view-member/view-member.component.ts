import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { MembersApiService } from '../members-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { MemberFormComponent } from '../member-form/member-form.component'


@Component({
  selector: 'app-view-member',
  templateUrl: './view-member.component.html',
  styleUrls: ['./view-member.component.css']
})
export class ViewMemberComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private membersApi: MembersApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('memberFormComponentReference') memberForm: MemberFormComponent;

  navHeading: any[] = [
    { text: "All Members", url: "/suite/members/all-members" },
    { text: "View Member", url: "/suite/members/view-member" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.membersApi.getSingleMember()
      .subscribe(
        res => {
          console.log(res);
          this.memberForm.firstName.val(res.first_name);
          this.memberForm.lastName.val(res.last_name);
          this.memberForm.sex.val(res.sex);
          this.memberForm.photo.nativeElement.value = res.photo;
          this.memberForm.nationality.val(res.nationality);
          this.memberForm.religion.val(res.religion);
          this.memberForm.occupation.val(res.occupation);
          this.memberForm.phone.val(res.phone);
          this.memberForm.email.val(res.email);
          this.memberForm.address.val(res.address);
          this.memberForm.state.val(res.state);
          this.memberForm.city.val(res.city);
          this.memberForm.postCode.val(res.post_code);
          this.memberForm.memberCode.val(res.member_code);
          this.memberForm.dateJoined.val(res.date_joined);
          this.memberForm.membershipStatus.val(res.membeship_status);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveMember(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a member");

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

    this.membersApi.putMember(memberData)
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

    console.log(memberData);
  }

  deleteMember(){
    console.log("dude... u are gonna delete the member?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.membersApi.deleteMember()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/members/all-members');
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

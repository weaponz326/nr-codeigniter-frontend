import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { MeetingsApiService } from '../meetings-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { MeetingFormComponent } from '../meeting-form/meeting-form.component'


@Component({
  selector: 'app-view-meeting',
  templateUrl: './view-meeting.component.html',
  styleUrls: ['./view-meeting.component.css']
})
export class ViewMeetingComponent implements OnInit {

  constructor(
    private router: Router,
    private meetingsApi: MeetingsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('meetingFormComponentReference') meetingForm: MeetingFormComponent;

  navHeading: any[] = [
    { text: "All Meetings", url: "/suite/meetings/all-meetings" },
    { text: "View Meeting", url: "/suite/meetings/view-meeting" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.meetingsApi.getSingleMeeting()
      .subscribe(
        res => {
          console.log(res);
          this.meetingForm.mainActivity.val(res.main_activity);
          this.meetingForm.meetingDate.val(res.meeting_date);
          this.meetingForm.meetingTime.val(res.meeting_time);
          this.meetingForm.location.val(res.location);
          this.meetingForm.otherActivities.val(res.other_activities);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveMeeting(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a meeting");

    var meetingData = {
      account: sessionStorage.getItem('association_id'),
      main_activity: this.meetingForm.mainActivity.val(),
      meeting_date: this.meetingForm.meetingDate.val(),
      meeting_time: this.meetingForm.meetingTime.val(),
      location: this.meetingForm.location.val(),
      other_activities: this.meetingForm.otherActivities.val(),
    }

    this.meetingsApi.putMeeting(meetingData)
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

    console.log(meetingData);
  }

  deleteMeeting(){
    console.log("dude... u are gonna delete the meeting?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.meetingsApi.deleteMeeting()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/meetings/all-meetings');
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

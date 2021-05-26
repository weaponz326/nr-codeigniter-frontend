import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { MeetingsApiService } from '../meetings-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { MeetingFormComponent } from '../meeting-form/meeting-form.component'


@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent implements OnInit {

  constructor(
    private router: Router,
    private meetingsApi: MeetingsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('meetingFormComponentReference') meetingForm: MeetingFormComponent;

  navHeading: any[] = [
    { text: "Add Meeting", url: "/suite/meetings/add-meeting" },
  ];

  ngOnInit(): void {
  }

  saveMeeting(){
    console.log('u are saving a new meeting');
    this.loadingSpinner.httpLoader.open();

    var meetingData = {
      account: sessionStorage.getItem('association_id'),
      main_activity: this.meetingForm.mainActivity.val(),
      meeting_date: this.meetingForm.meetingDate.val(),
      meeting_time: this.meetingForm.meetingTime.val(),
      location: this.meetingForm.location.val(),
      other_activites: this.meetingForm.otherActivities.val(),
    }

    console.log(meetingData);

    this.meetingsApi.postMeeting(meetingData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('meeting_id', res.data.id);
            this.router.navigateByUrl('/suite/meetings/view-meeting');
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

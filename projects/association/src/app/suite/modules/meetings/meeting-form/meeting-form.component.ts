import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';


@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.css']
})
export class MeetingFormComponent implements OnInit {

  constructor() { }

  @ViewChild('mainActivityReference') mainActivity: jqxInputComponent;
  @ViewChild('meetingDateReference') meetingDate: jqxDateTimeInputComponent;
  @ViewChild('meetingTimeReference') meetingTime: jqxDateTimeInputComponent;
  @ViewChild('locationReference') location: jqxInputComponent;
  @ViewChild('otherActivitiesReference') otherActivities: jqxTextAreaComponent;

  ngOnInit(): void {
  }

}

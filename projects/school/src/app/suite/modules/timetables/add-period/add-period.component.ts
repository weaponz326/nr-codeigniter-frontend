import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { TimetablesApiService } from '../timetables-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-add-period',
  templateUrl: './add-period.component.html',
  styleUrls: ['./add-period.component.css']
})
export class AddPeriodComponent implements OnInit {

  constructor(
    private router: Router,
    private timetablesApi: TimetablesApiService,
  ) { }

  @Output() periodEvent = new EventEmitter<any>();

  @ViewChild("addPeriodReference") addPeriod: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('periodReference') period: jqxInputComponent;
  @ViewChild('periodStartReference') periodStart: jqxDateTimeInputComponent;
  @ViewChild('periodEndReference') periodEnd: jqxDateTimeInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.addPeriod.open();
  }

  closeWindow(){
    this.addPeriod.close();
  }

  saveTimetable(){
    let periodData = {
      timetable: sessionStorage.getItem('timetable_id'),
      period: this.period.val(),
      period_start: this.periodStart.val(),
      period_end: this.periodEnd.val(),
    }

    console.log(periodData);
    this.periodEvent.emit(periodData);
    this.closeWindow();
  }

}

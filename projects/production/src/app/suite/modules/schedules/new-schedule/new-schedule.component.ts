import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

import { SchedulesApiService } from '../schedules-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.css']
})
export class NewScheduleComponent implements OnInit {

  constructor(
    private router: Router,
    private schedulesApi: SchedulesApiService,
  ) { }

  @ViewChild("newScheduleReference") newSchedule: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("scheduleNameReference") scheduleName: jqxInputComponent;
  @ViewChild("scheduleCodeReference") scheduleCode: jqxInputComponent;
  @ViewChild("fromDateReference") fromDate: jqxDateTimeInputComponent;
  @ViewChild("toDateReference") toDate: jqxDateTimeInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  supplierId;

  ngOnInit(): void {
  }

  openWindow(){
    this.newSchedule.open();
  }

  saveSchedule(){
    this.loadingSpinner.httpLoader.open();

    let scheduleData = {
      production_id: localStorage.getItem('production_id'),
      schedule_name: this.scheduleName.val(),
      schedule_code: this.scheduleCode.val(),
      from_date: this.fromDate.val(),
      to_date: this.toDate.val(),
    }

    this.schedulesApi.postSchedule(scheduleData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('schedule_id', res.schedule_id);
            this.router.navigateByUrl('/suite/schedules/view-schedule');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(scheduleData);
  }

}

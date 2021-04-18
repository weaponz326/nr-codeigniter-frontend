import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';


@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {

  constructor() { }

  @ViewChild("scheduleCodeReference") scheduleCode: jqxInputComponent;
  @ViewChild("scheduleNameReference") scheduleName: jqxInputComponent;
  @ViewChild("fromDateReference") fromDate: jqxDateTimeInputComponent;
  @ViewChild("toDateReference") toDate: jqxDateTimeInputComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  navHeading: any[] = [
    { text: "All Schedules", url: "/suite/schedules/all-schedules" },
    { text: "View Schedule", url: "/suite/schedules/view-schedule" },
  ];

  ngOnInit(): void {
  }

}

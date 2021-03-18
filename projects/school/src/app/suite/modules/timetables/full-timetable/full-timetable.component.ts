import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-full-timetable',
  templateUrl: './full-timetable.component.html',
  styleUrls: ['./full-timetable.component.css']
})
export class FullTimetableComponent implements OnInit {

  constructor() { }

  @ViewChild('timetableCodeReference') timetableCode: jqxInputComponent;
  @ViewChild('timetableNameReference') timetableName: jqxInputComponent;
  @ViewChild('timetableDateReference') timetableDate: jqxDateTimeInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;
  @ViewChild('saveTimetableReference') saveButton: jqxButtonComponent;

  navHeading: any[] = [
    { text: "All Timetables", url: "/suite/timetables/all-timetables" },
    { text: "Full Timetable", url: "/suite/timetables/full-timetable" },
  ];

  ngOnInit(): void {
  }

}

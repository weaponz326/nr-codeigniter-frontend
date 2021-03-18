import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';


@Component({
  selector: 'app-class-timetable',
  templateUrl: './class-timetable.component.html',
  styleUrls: ['./class-timetable.component.css']
})
export class ClassTimetableComponent implements OnInit {

  constructor() { }

  @ViewChild('timetableCodeReference') timetableCode: jqxInputComponent;
  @ViewChild('timetableNameReference') timetableName: jqxInputComponent;
  @ViewChild('timetableDateReference') timetableDate: jqxDateTimeInputComponent;
  @ViewChild('classNameReference') className: jqxInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;

  navHeading: any[] = [
    { text: "All Timetables", url: "/suite/timetables/all-timetables" },
    { text: "Full Timetable", url: "/suite/timetables/full-timetable" },
    { text: "Class Timetable", url: "/suite/timetables/class-timetable" },
  ];

  ngOnInit(): void {
  }

}
